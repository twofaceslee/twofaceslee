# 이재명의 두 얼굴

이재명 대표의 두 얼굴을 보여주는 웹사이트입니다.

## 섹션 추가 가이드라인

### 1. HTML 구조
```html
<section id="history" class="history-section">
    <div class="history-content">
        <h2 class="section-title">섹션 제목</h2>
        <!-- 내용 작성 -->
    </div>
</section>
```
- `section-title`은 기본 클래스이며 `history-title'과 같이 필요시 클래스 추가 가능
- 섹션 ID는 고유해야 함

### 2. 헤더 추가
```html
<li class="dropdown">
    <a href="donation.html" class="dropbtn">메뉴명</a>
    <div class="dropdown-content">
        <a href="donation.html#section-id">섹션명</a>
        <!-- 추가 섹션 -->
    </div>
</li>
```
- 헤더는 섹션과 동일한 위치에 있어야 함

### 3. CSS 스타일
- 해당 페이지의 CSS 파일에서 스타일 수정
- 섹션별 스타일은 해당 페이지의 CSS 파일에 추가
- 섹션 위치와 동일하게 CSS가 작성되어야 함
- CSS가 상위 CSS를 덮으면 안됨

### 4. 미디어 가이드라인
- 이미지: `img` 폴더에 `section-name_purpose.확장자` 형식으로 저장
- 동영상: YouTube 또는 뉴스 기사 영상만 허용
- 이미지는 최적화된 크기와 압축 필수

### 5. 컨텐츠 규칙
- 모든 내용은 반드시 출처 포함
- Pull Request 시 출처 첨부 필수
- 객관적 사실 기반의 중립적 서술
