- 주피터 노트북에서 실행한 것을 바탕으로 적었습니다.

### hwp 전처리
```Python
# 라이브러리 설치
!pip install olefile
import olefile
```

```Python
path = "/파일위치/파일이름.hwp"
f = olefile.OleFileIO(path)
# 미리 보기 뷰로 내용 훑어보기
encoded_txt = f.openstream("PrvText").read()
text = encoded_txt.decode("utf-16, errors="ignore")
print(text)
```
