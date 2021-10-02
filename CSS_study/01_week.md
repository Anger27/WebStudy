01_ rem, vh, vw, vmin, vmax, ex, ch, ... / 어떤 역할을 하는지 설명할 수 있을 정도로  알아오기
02_ display 기능 및 속성, flex 기능 및 속성, float 기능 및 속성 에 대해 정확한 설명

-----------------------------------------------------------------------------

# 1. CSS 단위
## 1.1 절대단위
in, cm, mm, pt, pc / 출력장치(모니터)의 물리적 속성에 따라 사용
## 1.2 상대단위
em, ex, px, % / 기종간, 플랫폼 간의 호환성을 유지하는데 유리
### 1.2.1 px
pixel, 표시장치(모니터)에 따라서 상대적인 크기를 가짐.
1px은 display 장치의 1px에 해당
### 1.2.2 %
percent, 기본글꼴의 크기에 대하여 상대적인 값을 가짐.
### 1.2.3 pt
point, 일반 문서(워드 등)에서 많이 사용하는 단위
### 1.2.4 ex, ch
#### 1.2.4.1 ex
x-height, 해당폰트의 소문자 x의 높이를 기준으로 함.
####1.2.4.2 ch
제로 문자인 0의 너비값의 "고급 척도"로 정의
### 1.2.5 rem, em
font_size, 해당폰트의 대문자 M의 너비를 기준으로 함.
#### 1.2.5.1 em
부모의 사이즈의 배율
#### 1.2.5.1 rem
루트(HTML) 사이즈의 배율
### 1.2.6 viewport (vh, vw, vmin, vmax)
화면 사이즈를 기준으로 함.
#### vh, vw
vh: viewport height
1vh === 1/100 viewport height

vw: viewport width
1vw === 1/100 viewport width
#### vmin, vmax
viewport 의 height와 width 중 최소값 또는 최대값을 기준
ex: width 1280, height 720
1vmin === 1/100 height
1vmax === 1/100 width

### 단위 변환 사이트 [http://pxtoem.com/]

# 2. CSS display 속성
## 2.1 none / visbility: hidden
`display: none`은 render X
`visbility: hidden`은 공간 차지 / 보이진 않음
## 2.2 block
화면 크기 전체 가로폭 영역 차지
대표 block 태그: `<div>`
## 2.3 inline
가진 텍스트의 영역 만큼 공간 차지
width 및 height 값을 줄 수 없음
``` html
<!-- ex1 텍스트 있으므로 표출 -->
<span>1</span>

<!-- ex2 텍스트 없으므로 미표출 -->
<span></span>
```
대표 inline 태그: `<span>`
## 2.4 inline-block
가진 텍스트의 영역 만큼 공간 차지 / 남은 공간에 다른 컨트롤 올 수 있음
width 및 height 값을 줄 수 있음
텍스트가 없어도 렌더 됨
## 2.5 CSS display: flex 속성
`flex: flex-grow, flex-shrink, flex-basis`
flex-grow: flex-item 요소가, flex-container 요소 내부에서 할당 가능한 공간의 정도를 선언
flex-shrink: flex-item 요소의 크기가 flex-container 요소의 크기보다 클 때 flex-shrink 속성을 사용하는데, 설정된 숫자값에 따라 flex-container 요소 내부에서 flex-item 요소의 크기가 축소
flex-basis: 플렉스 아이템의 초기 크기를 지정합니다. box-sizing을 따로 지정하지 않는다면 콘텐츠 박스의 크기를 변경
### 2.5.1 메인축 교차축
메인축 교차축에 따라 flex 컨테이너 내 정렬 순서 변경 됨
#### 2.5.1.1 flex-direction
ex) 메인축이 좌->우 교차축이 상->하 인 경우
`flex-direction: row;`: 좌측 정렬 / 좌에서 우로 요소 sorting
`flex-direction: row-reverse;`: 우측 정렬 / 우에서 좌로 요소 sorting

`flex-direction: column;`: 상단 정렬 / 상에서 하로 요소 sorting
`flex-direction: column-reverse;`: 하단 정렬 / 하에서 상으로 요소 sorting
#### 2.5.1.2 flex-wrap
`flex-wrap: nowrap;`: 줄바꿈 X / 영역 초과시 영역 초과해서 표출
`flex-wrap: wrap;`: 줄바꿈
`flex-wrap: wrap-reverse;`: 줄바꿈 / 요소 역순 sorting
#### 2.5.1.3 flex-flow
`flex=flow: flex-direction flex-wrap;`