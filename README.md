# [Week 2] Best Practice of Wanted Pre-onboarding Assignment

원티드 프리온보딩 인턴십 3팀 3주차 개인과제입니다.

## 🚀 배포 링크

배포
링크: [질병 검색 사이트](https://disease-name-finder-mfjup50jd-taegeun1111.vercel.app/)

<br/>

## 🎬 프로젝트 로컬 실행 방법

1. Frontend

```
 git clone https://github.com/taegeun1111/disease-name-finderApi.git
 npm install
 npm start
```

2. Backend

```
 git clone git clone https://github.com/walking-sunset/assignment-api.git
 npm install
 npm start
```

<br/>

## 🛠️ 기술 스택

<div>
   <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
   <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
   <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
   <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white">
   <br/>
   <img src="https://img.shields.io/badge/husky-efefef?style=flat&logo=husky&logoColor=white">
   <img src="https://img.shields.io/badge/ESlint-4B32C3?style=flat&logo=eslint&logoColor=white">
   <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=white">
</div>

<br/>

## 📝 요구 사항

### **[Assignment 0] 검색시 API 호출을 통해 검색어 추천 기능 구현**

> - 검색어가 없을 시 “검색어 없음” 표출
> - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
> - API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

#### **구현 방법**

사용 기술 : axios

1. API 호출

- API를 호출할 때 axios의 `interceptors.request.use`를 통하여 요청을 보내기 전 출력값 호출 <br />

  <details>
  <summary>코드보기</summary>

  ```ts
    index.interceptors.request.use(
            (config) => {
              console.info('calling api');
              return config;
            },
            (error) => {
              return error;
            }
    );  
  ```
  </details>


2. API 호출 횟수를 줄이는 전략

- debouncing을 통하여 일정 시간 동안 입력값이 변경 되지 않을 때 500ms를 대기했다 api를 호출되게 하였습니다. 끝나면 클린업 함수를 통하여 해당 타이머를 제거

  <details>
  <summary>코드보기</summary>
  
  ```ts
  useEffect(() => {
    const inputSearch = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);
  
    return () => {
      clearTimeout(inputSearch);
    };
  }, [inputValue]);
  ```
  </details>


<br />

### **[Assignment 1] API 호출별로 로컬 캐싱 구현**

> - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)

#### **구현 방법**

사용 기술 : cache storage

1. 로컬 캐싱

- api를 통해 데이터를 저장할 때 cache storage를 통해 사용할 키와 데이터를 입력받고, 데이터를 캐시에 저장 후 추가로 header에 만료일을 현재 시간에 정해둔 시간을 더해 설정해줘서 api를 호출할
  때 특정 키로 저장된 데이터를 확인하고, 데이터가 있다면 그 데이터의 만료일을 현재 시간과 비교한 후 만료 되었다면 해당 키를 자동으로 삭제한 후 데이터를 반환해줍니다.

  <details>
  <summary>코드보기</summary>

  ```ts
    export const getCacheData = async (debouncedValue: string) => {
      try {
        const cacheStorage = await caches.open(CACHE_NAME);
        const cachedResponse = await cacheStorage.match(debouncedValue);
        if (cachedResponse) {
          const expirationTime = Number(cachedResponse.headers.get('Expiration'));
          if (expirationTime && expirationTime < Date.now()) {
            await cacheStorage.delete(debouncedValue);
          }
          return await cachedResponse.json();
        } else {
          return false;
        }
      } catch (error) {
        console.error('Cache Data Error : ', error);
        return false;
      }
    };
    
    export const setCacheData = async (debouncedValue: string, response: RecommendType[]) => {
      if (debouncedValue.length > 0) {
        const cache = await caches.open(CACHE_NAME);
        const expirationTime = Date.now() + CACHE_EXPIRATION_TIME;
        const init = {
          headers: {
            'Content-Type': 'application/json',
            Expiration: expirationTime.toString(),
          },
        };
        const CachedData = new Response(JSON.stringify(response), init);
        await cache.put(debouncedValue, CachedData);
      }
    };
  ```
  </details>


<br />

### **[Assignment 2] 키보드만으로 추천 검색어들로 이동 가능하도록 구현**

#### **구현 방법**

사용 기술 : Context API

1. 추천 검색어 이동

- onkeyDown를 통해 키보드를 누를 때 키 값을 비교해 어떤 키인지 확인 하고 각 키에 대한 처리를 했습니다. 아직 키보드 이벤트가 일어나지 않을 때를 -1로 설정하고 Context API를 통해 props를
  전달해주어 현재 추천 검색어의 위치를 나타내주었습니다.
- 한글과 영어의 차이로 한글을 입력하면 0번 배열에 접근하지 못하고 `onkeydown`이벤트가 2번 발생하는 오류를 `IME event` 사용하여 한글 입력 처리 제어를 했습니다.

  <details>
  <summary>코드보기</summary>

  ```ts
  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (isComposing) {
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (selected > 0 && recommend.length > 1) {
          setSelected(selected - 1);
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (selected < recommend.length - 1 && recommend.length > 1) {
          setSelected(selected + 1);
        }
      } else if (e.key === 'Enter') {
        if (selected >= 0 && selected < recommend.length) {
          setInputValue(recommend[selected].sickNm);
          setSelected(initialValue);
        }
      }
    };
    
    return (
            <StyledInputSearch $focused={focused}>
              <input
                  type='text'
                  value={inputValue}
                  placeholder='질환명을 입력해주세요'
                  className='search-input'
                  onChange={inputChangeHandler}
                  onFocus={inputFocusHandler}
                  onBlur={inputBlurHandler}
                  onKeyDown={keyDownHandler}
                  onCompositionStart={handleCompositionStart}
                  onCompositionEnd={handleCompositionEnd}
              />
              <button type='button' className='search-btn'>
                      <HiOutlineSearch />
              </button>
          </StyledInputSearch
    );
  ```
  </detail>

<br/>

## 📽 구현 영상

<p style="display: flex; justify-content: center;">
  <figure style="text-align: center; margin-right: 20px;">
    <img src="https://github.com/taegeun1111/disease-name-finder/assets/122959190/92481cbe-607b-4fff-a349-6173388c54bd" alt="이미지 1" width="70%">
    <p>구현 영상</p>
  </figure>
  <figure style="text-align: center;">
    <img src="https://github.com/taegeun1111/disease-name-finder/assets/122959190/35e35917-51b9-4e87-81ad-bab683f389be" alt="이미지 2" width="70%">
    <p>캐시 및 호출 확인</p>
  </figure>
</p>

## 🗂️ 폴더 구조

```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┗ 📂Layout
 ┃ ┣ 📂inputSearch
 ┃ ┗ 📂recommendSearch
 ┣ 📂pages
 ┃ ┣ 📂error
 ┃ ┣ 📂finderApi
 ┣ 📂router
 ┣ 📂service
 ┃ ┣ 📂constant
 ┃ ┗ 📂cacheStorage.ts
 ┣ 📂store
 ┃ ┣ 📂input
 ┃ ┣ 📂recommend
 ┣ 📂styles
 ┗ 📂types
```
