# 리그오브레전드 데이터

## 목적 ##
- 여러 API의 발음 변환(영어 -> 한글) 확인

## 데이터 구조 ##
**player_infos_final.xlsx**
- column : name, nickname, team, DeepL_translation, Papago_transltaion
- row 1 : 이상혁,Faker,T1, Faker, 페이커

### 파일 설명
1. player_infos : 리그오브레전드 기록실 크롤링 데이터
2. player_infos_v1 : DeepL Api를 이용한 번역데이터 추가, 기존 칼럼 + 추가된 칼럼 ('DeepL_translation') 
3. player_infos_v2 : Papago Api를 이용한 번역데이터 추가, 기존 칼럼 + 추가된 칼럼 ('Papago_transltaion')
4. player_infos_final : player_infos_v1, player_infos_v2를 merge한 파일 (전체 칼럼 name, nickname, team, DeepL_translation, Papago_transltaion)

## 데이터 수집 ##
### 리그오브레전드 기록실
> https://lol.inven.co.kr/dataninfo/match/playerTotal.php

### 2024 리그 오브 레전드 챔피언스 코리아 스프링 선수 명단
> https://ko.wikipedia.org/wiki/2024_%EB%A6%AC%EA%B7%B8_%EC%98%A4%EB%B8%8C_%EB%A0%88%EC%A0%84%EB%93%9C_%EC%B1%94%ED%94%BC%EC%96%B8%EC%8A%A4_%EC%BD%94%EB%A6%AC%EC%95%84_%EC%8A%A4%ED%94%84%EB%A7%81_%EC%84%A0%EC%88%98_%EB%AA%85%EB%8B%A8
