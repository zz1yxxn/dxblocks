# 📧 EmailJS 설정 가이드

이 가이드는 디엑스블록스 웹사이트의 문의하기 기능을 활성화하기 위한 EmailJS 설정 방법을 단계별로 안내합니다.

---

## 📋 목차
1. [EmailJS 계정 생성](#1-emailjs-계정-생성)
2. [이메일 서비스 연동](#2-이메일-서비스-연동)
3. [이메일 템플릿 생성](#3-이메일-템플릿-생성)
4. [Public Key 확인](#4-public-key-확인)
5. [코드에 키 값 적용](#5-코드에-키-값-적용)
6. [테스트](#6-테스트)

---

## 1. EmailJS 계정 생성

### 1-1. EmailJS 웹사이트 접속
- 브라우저에서 [https://www.emailjs.com/](https://www.emailjs.com/) 접속

### 1-2. 회원가입
- 우측 상단 **"Sign Up"** 버튼 클릭
- Google 계정 또는 이메일로 가입
- 이메일 인증 완료

### 1-3. 무료 플랜 확인
- 무료 플랜: 월 200건까지 이메일 전송 가능
- 회사 문의 용도로 충분히 사용 가능

---

## 2. 이메일 서비스 연동

### 2-1. 서비스 추가
1. 로그인 후 대시보드에서 **"Add New Service"** 클릭
2. 이메일 서비스 제공자 선택:
   - **Gmail** (가장 간단, 권장)
   - Outlook
   - Yahoo
   - 기타 SMTP 서버

### 2-2. Gmail 연동 방법 (권장)
1. **"Gmail"** 선택
2. **"Connect Account"** 버튼 클릭
3. Google 계정 로그인
4. EmailJS 권한 승인
5. 서비스 이름 설정 (예: "DXBlocks_Support")
6. **Service ID** 자동 생성 (예: `service_abc1234`)
   - ⚠️ **이 Service ID를 메모장에 복사해두세요!**
7. **"Create Service"** 버튼 클릭

### 2-3. 보안 강화 (선택사항)
- Gmail 2단계 인증 사용 시: 앱 비밀번호 생성 필요
- [Google 앱 비밀번호 생성](https://myaccount.google.com/apppasswords)

---

## 3. 이메일 템플릿 생성

### 3-1. 템플릿 페이지 이동
1. 대시보드 좌측 메뉴에서 **"Email Templates"** 클릭
2. **"Create New Template"** 버튼 클릭

### 3-2. 템플릿 설정
1. **Template Name**: "DXBlocks Contact Form" (또는 원하는 이름)
2. **To Email**: `support@dxblocks.com` 입력
   - 문의 내용을 받을 이메일 주소

### 3-3. 템플릿 내용 작성
**Subject (제목):**
```
[디엑스블록스 문의] {{from_name}}님의 문의
```

**Content (본문):**
```
안녕하세요,

디엑스블록스 웹사이트를 통해 새로운 문의가 접수되었습니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 문의자 정보
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 이름: {{from_name}}
• 이메일: {{from_email}}
• 연락처: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 문의 내용
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

이 이메일은 디엑스블록스 웹사이트(www.dxblocks.com) 문의하기 양식을 통해 자동 발송되었습니다.

답변은 {{from_email}}로 회신하시면 됩니다.
```

### 3-4. 템플릿 저장
1. **"Save"** 버튼 클릭
2. **Template ID** 자동 생성 (예: `template_xyz5678`)
   - ⚠️ **이 Template ID를 메모장에 복사해두세요!**

### 3-5. 템플릿 변수 설명
템플릿에서 사용한 변수들:
- `{{from_name}}`: 문의자 이름
- `{{from_email}}`: 문의자 이메일
- `{{phone}}`: 문의자 연락처
- `{{message}}`: 문의 내용

---

## 4. Public Key 확인

### 4-1. Account 페이지 이동
1. 대시보드 우측 상단 프로필 클릭
2. **"Account"** 메뉴 선택

### 4-2. Public Key 복사
1. **"API Keys"** 섹션 찾기
2. **"Public Key"** 확인 (예: `abcXYZ123456`)
   - ⚠️ **이 Public Key를 메모장에 복사해두세요!**

---

## 5. 코드에 키 값 적용

### 5-1. Contact.tsx 파일 열기
- `/components/Contact.tsx` 파일을 코드 에디터로 열기

### 5-2. 키 값 교체
19-22번 줄에 있는 플레이스홀더를 실제 값으로 교체:

**수정 전:**
```typescript
const SERVICE_ID = 'YOUR_SERVICE_ID';      // 예: 'service_abc1234'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // 예: 'template_xyz5678'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // 예: 'abcXYZ123456'
```

**수정 후 (예시):**
```typescript
const SERVICE_ID = 'service_abc1234';      // EmailJS에서 받은 Service ID
const TEMPLATE_ID = 'template_xyz5678';    // EmailJS에서 받은 Template ID
const PUBLIC_KEY = 'abcXYZ123456';         // EmailJS에서 받은 Public Key
```

### 5-3. 파일 저장
- 변경 사항 저장 (Ctrl+S 또는 Cmd+S)

---

## 6. 테스트

### 6-1. 웹사이트에서 테스트
1. 웹사이트 접속
2. "문의하기" 섹션으로 스크롤
3. 폼 작성:
   - 이름: 테스트
   - 이메일: test@example.com
   - 연락처: 010-1234-5678
   - 문의내용: 테스트 문의입니다.
4. **"문의 보내기"** 버튼 클릭

### 6-2. 결과 확인
- ✅ **성공 메시지**: "문의가 성공적으로 전송되었습니다"
  - → support@dxblocks.com 이메일 수신함 확인
- ❌ **실패 메시지**: "문의 전송에 실패했습니다"
  - → 아래 문제 해결 섹션 참고

### 6-3. EmailJS 대시보드 확인
1. EmailJS 대시보드 접속
2. 좌측 메뉴 **"Email Activity"** 클릭
3. 전송 기록 확인
   - Status: Sent (성공)
   - Recipient: support@dxblocks.com

---

## 🔧 문제 해결 (Troubleshooting)

### ❌ "User ID is invalid" 에러
**원인**: Public Key가 잘못 입력됨  
**해결**: Contact.tsx의 PUBLIC_KEY 값 재확인 및 수정

### ❌ "Service not found" 에러
**원인**: Service ID가 잘못 입력됨  
**해결**: Contact.tsx의 SERVICE_ID 값 재확인 및 수정

### ❌ "Template not found" 에러
**원인**: Template ID가 잘못 입력됨  
**해결**: Contact.tsx의 TEMPLATE_ID 값 재확인 및 수정

### ❌ 이메일이 수신되지 않음
**원인 1**: Gmail 스팸함에 저장됨  
**해결**: Gmail 스팸함 확인, 스팸 아님 처리

**원인 2**: To Email이 잘못 설정됨  
**해결**: EmailJS 템플릿의 To Email을 `support@dxblocks.com`으로 수정

### ❌ Gmail 연동 실패
**원인**: Gmail 보안 설정  
**해결**:
1. Gmail 2단계 인증 활성화
2. [앱 비밀번호 생성](https://myaccount.google.com/apppasswords)
3. EmailJS 서비스 설정에서 앱 비밀번호 사용

---

## 📌 중요 참고사항

### 보안
- ⚠️ Public Key는 프론트엔드 코드에 노출되어도 안전합니다
- ⚠️ Private Key는 절대 프론트엔드에 포함하지 마세요
- ⚠️ EmailJS는 프론트엔드용 서비스로 설계되어 Public Key 노출은 문제없습니다

### 비용
- 무료 플랜: 월 200건
- 문의가 많을 경우 유료 플랜 고려:
  - Personal: $15/월 (월 1,000건)
  - Professional: $55/월 (월 5,000건)

### 대안
EmailJS 외에 다른 방법:
1. **백엔드 서버 구축** (Node.js + Nodemailer)
2. **Formspree** (유료)
3. **Getform** (무료 50건/월)
4. **Form-Data** (Google Sheets 연동)

---

## 📞 추가 도움말

### EmailJS 공식 문서
- [EmailJS 시작 가이드](https://www.emailjs.com/docs/)
- [React 연동 가이드](https://www.emailjs.com/docs/examples/reactjs/)

### 문의
문제가 계속되면:
1. EmailJS 고객 지원: [support@emailjs.com](mailto:support@emailjs.com)
2. EmailJS 공식 문서 확인

---

## ✅ 체크리스트

설정 완료 확인:
- [ ] EmailJS 계정 생성
- [ ] Gmail 서비스 연동 (Service ID 획득)
- [ ] 이메일 템플릿 생성 (Template ID 획득)
- [ ] Public Key 확인
- [ ] Contact.tsx 파일의 3개 키 값 수정
- [ ] 웹사이트에서 테스트 문의 전송
- [ ] support@dxblocks.com으로 이메일 수신 확인

모든 항목 체크 완료 시 문의하기 기능이 정상 작동합니다! 🎉
