# 이재명의 두 얼굴

이재명 대표의 두 얼굴을 보여주는 웹사이트입니다.

## 새로운 섹션 추가 가이드라인

### 1. 섹션 구조
새로운 섹션은 다음과 같은 기본 구조를 따라야 합니다:

```html
<section id="section-id" class="section-name-section">
    <div class="section-name-content">
        <h2 class="section-title">섹션 제목</h2>
        <div class="section-name-description">
            <!-- 섹션 내용 -->
        </div>
    </div>
</section>
```

### 2. CSS 스타일
- 섹션별 스타일은 관련 CSS 파일에 추가
- 기본 섹션 스타일은 `style.css`를 참고
- 섹션별 고유 스타일은 해당 페이지의 CSS 파일에 추가

### 3. 필수 요구사항
- 모든 섹션은 반드시 출처가 있어야 함
- 섹션 ID는 고유해야 함
- 반응형 디자인 고려 필수
- 접근성 고려 (시맨틱 마크업, 적절한 alt 텍스트 등)

### 4. 이미지 가이드라인
- 이미지는 `img` 폴더에 저장
- 파일명은 `section-name_purpose.확장자` 형식 사용
- 최적화된 이미지 사용 (적절한 크기와 압축)

### 5. 컨텐츠 기준
- 객관적 사실에 기반한 내용만 포함
- 검증 가능한 출처 필수
- 편향되지 않은 중립적 서술

## 기여 방법
자세한 기여 방법은 [기여하기](donation.html#github) 페이지를 참고해 주세요.

## 오류 제보
오류나 수정이 필요한 내용은 [에러 레포트](donation.html#report) 페이지를 통해 제보해 주세요. 