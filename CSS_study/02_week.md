```
과제 1. flex 사용하면서 js 이용해서 구글 image gallery 만들어오기 -----> /layout/07_FlexImg
과제 2. 1개의 618*? 사이즈의 container 안에 너비 50%, 높이 랜덤(최대 120px, 10px 단위) 사이즈로 float 속성을 사용해서 카드 1 부터 10까지 만들어보기 -----> /layout/08_Float
과제 3. float 의 문제점 (사용하지말하야 할 이유)
과제 4. css 의 우선 적용 순위에 대해 알아오기
과제 5. css 에 변수 사용하기 -----> /layout/09_VariableCSS
과제 6. word-break, word-spacing, word-wrap 에 대해 알아오기 (차이점도)
```
# 과제 1. flex 사용하면서 js 이용해서 구글 image gallery 만들어오기 -----> /layout/07_FlexImg

# 과제 2. Float Test -----> /layout/08_Float
# 과제 3. Float 의 문제점
https://blog.eunsatio.io/develop/%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EC%A0%95%EB%A0%AC%EC%9D%84-%EC%9C%84%ED%95%B4-css-float%EB%A5%BC-%EB%90%98%EB%8F%84%EB%A1%9D-%EC%93%B0%EC%A7%80-%EC%95%8A%EC%95%84%EC%95%BC-%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0

https://grace-go.tistory.com/39
## 3.1 부모 요소의 크기
overflow 속성이 visible 인 경우 부모의 크기가 자동 조절 되지 않음.(position:absolute 처럼 렌더링 됨)<br>
-> 직관적인 이해가 어려움

## 3.2 요소의 높이가 제각각일 때 (/layout/08_Float)
-> 정렬이 높이에 따라 제각각
## 3.3 속성의 상속
float 은 element 들의 흐름을 관리하는 속성으로 다음(자식) element 에게 상속 됨.<br>
이 때 자식 element 에서 clear 를 해주지 않으면 정상적인 표출이 불가할 수 있음.<br>
-> 직관정 저해 및 예외처리 난이도 증가
## 3.4 대체 가능 방법
display: inline-block 및 text-algin 으로 비슷한 효과 적용 가능.<br>
최근에는 flex 등을 이용하는 방법이 더욱 효과적.<br>
만약 float를 사용해야 한다면 https://grace-go.tistory.com/39 방법등을 추천

# 과제 4. css 의 우선 적용 순위
* 기본적으로 뒤에 나오는 css가 우선순위가 높음
* !important > inline style attribute > id > class, 다른 attribute, Pseudo Class(:first-child같은 것) > tag element, Pseudo Element(::before같은 것) 순으로 우선순위가 높음
* 우선순위가 같다면 개수가 많은 css가 우선순위가 높음
## 4.1 !important 및 inline style attribut
### 4.1.1 !important
css 값 뒤에 붙여진 키워드<br>
`property: value !important;`
### 4.1.2 inline style attribut
`<tag style="value"></tag>`<br>
* Internal style sheet: 내부 스타일 시트
`<style></style>`
* External style sheet: 외부 스타일 시트
`<link rel="stylesheet" href="style.css">`
## 4.2 id / class / attribute / pseudo class
### 4.2.1 id
#id
### 4.2.2 class
.class
### 4.2.3 another attribute
### 4.2.4 pseudo class (의사 클래스)
특정 셀렉터에 특별한 효과를 부여하기 위해 사용.<br>
ex) `:first-child`
``` css
selector::pseudo-class {
  property: value;
}
```
## 4.3 tag element / pseudo element
### 4.3.1 tag element
`div {}`, `p {}` 등
### 4.3.2 pseudo element (의사 요소)
셀렉터에 추가하는 키워드로, 선택한 요소의 일부분에만 스타일을 입힐 수 있음.<br>
ex) `::before`
``` css
selector::pseudo-element {
  property: value;
}
```
# 과제 5. css 변수 사용해보기 -----> /layout/09_VariableCSS
# 과제 6. word-break word-spacing word-wrap
## 6.1 word-break
문자 개행 스타일.<br>
텍스트가 들어가는 블록 요소의 가로 사이즈에 맞춰 줄바꿈 설정.
``` css
word-break: value;
```
## 6.2 word-spacing
단어와 단어 사이, 태그와 태그 사이의 거리 설정<br>
ex) `word-spacing: 1rem`
``` css
word-spacing: value;
```

## 6.3 word-wrap
텍스트가 들어가는 블록 요소의 사이즈에 따라 줄바꿈 설정.<br>
`word-wrap: break-word;` 와 `word-break: break-all;` 은 같은 결과물
``` css
word-wrap: value;
```