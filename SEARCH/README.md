# SEARCH
## 검색이란?
- 검색은 검색을 하는 대상이 원하는 내용을 찾아내는 행위이다.
- '좋은 검색'이란, 사용자의 의도에 부합하는 검색 결과를 내놓을 확률이 높은 검색이다.
- 이를 위한 것이 검색 엔진이며 검색 엔진의 성능 향상을 통해 사용자들의 사용 경험 향상 및 사용률 증가를 발생시킬 수 있다.

### 검색을 위한 세 가지 과정
1. 색인
2. 검색(또는 질의)
3. 스코어링(또는 랭킹)

### 문서를 추출하는 방법
1. BOW(Bag of Words) : 단어별 카운트를 기반으로 문서로부터 특성을 추출하고 표현하는 방식 (단어의 출현 통계를 이용하는 방식)
   1) 단어의 사용 여부만 표시하는 방법
   2) 단어 수를 표시하는 방법
   3) 단어가 문서에 나타난 수를 반영해 보정하는 방법
  
## ALGORITHM
- 문자열 일치
- 레벤슈타인 거리
- 자카드 척도
- NGram 편집거리
- TF-IDF
> https://github.com/SLIPPECAT/SEARCH/tree/main/algorithm

- ## LIBRARY
- Java
- Python
> https://github.com/SLIPPECAT/SEARCH/blob/main/library/README.md

### 한글 형태소 분석기
| 형태소 분석기               | 링크                                        |
| -------------------------- | ------------------------------------------ |
| 키위               | <https://github.com/bab2min/Kiwi?tab=readme-ov-file> |
| 아리랑              | <https://github.com/korlucene> |
| 꼬꼬마        | <http://kkma.snu.ac.kr/>        |
| 코모란        | <https://www.shineware.co.kr/products/komoran/#demo?utm_source=komoran-kr&utm_medium=Referral&utm_campaign=github-demo> |
| 바른 한글 형태소 분석기    | <https://github.com/bareun-nlp/korean-ambiguity-data> |

## 도전할 만한 과제
- 검색 기능이 들어간 사이트들의 검색 기능 점검 및 개선점 파악
- 랭킹 작업에 사용되는 알고리즘 개선
- 색인 최적화
- 형태소 분석기의 성능, 또는 속도 개선

## DATA
- 구텐베르크 프로젝트
- 네이버 영화 리뷰 (테스트 파일로 제공)
- 네이버 뉴스 분류 (NNST 파이썬 라이브러리 형태로 제공)
- 50 Years of Pop Music Lyrics
- 불용어 사전 (한글)
- 병렬 말뭉치 (OPUS)
> https://github.com/SLIPPECAT/SEARCH/tree/main/data

### 머신러닝 자료
- 언어 정보 나눔터
> https://corpus.korean.go.kr/

## 관련 읽을 만한 책
| 번호  | 제목  | 사용 언어  | 난이도  |
|--------|--------|--------|--------|
| 1  | 검색을 위한 딥러닝  | 자바  | ⭐️⭐️ |
| 2  | 파이썬 텍스트 마이닝  | 파이썬  | ⭐️ |


