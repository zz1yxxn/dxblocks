import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/8a1bff1c7b7892b77ff122aeceb44b73f8b19c54.png';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

export function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-black border-t border-white/10 text-gray-300 py-12 px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-12 mb-8">
          <div className="flex flex-col gap-4">
            <div className="mb-4">
              <ImageWithFallback src={logoImage} alt="디엑스블록스" className="h-16 w-auto" />
            </div>
            <div className="text-[0.95rem] leading-relaxed text-gray-300">
              대표이사: 박민호
              <br />
              주소: 경기도 성남시 수정구 창업로 40번길 6
              <br className="md:hidden" />
              (판교제2테크노밸리 LH창업지원주택) 3층 2호
              <br />
              <span className="font-[Almarai]">TEL.</span> 070-8080-1356 <span className="md:inline hidden">|</span>
              <br className="md:hidden" />
              <span className="font-[Almarai]">FAX.</span> 050-4001-5669 <span className="md:inline hidden">|</span>
              <br className="md:hidden" />
              <span className="font-[Almarai]">E-MAIL.</span> support@dxblocks.com
            </div>
          </div>

          <div className="flex flex-col gap-3 items-start md:items-end">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="text-gray-300 no-underline text-[0.95rem] transition-colors hover:text-white bg-transparent border-none cursor-pointer p-0"
            >
              개인정보처리방침
            </button>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 text-[0.85rem] text-gray-500">
          © 2024 (주)디엑스블록스. <span className="font-[Almarai]">ALL RIGHT RESERVED</span>
        </div>
      </footer>

      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="max-w-[90vw] md:max-w-[700px] max-h-[90vh] bg-white">
          <DialogHeader>
            <DialogTitle className="text-[1.5rem] mb-2">📄 개인정보처리방침</DialogTitle>
            <DialogDescription className="text-gray-700">
              본 사이트(이하 "회사"라 함)는 「개인정보보호법」 등 관련 법령을 준수하며, 이용자의 개인정보를 보호하기 위해 다음과 같이 개인정보처리방침을 수립·공개합니다.
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[calc(90vh-150px)] pr-4">
            <div className="space-y-6 text-gray-800 break-keep">
              <section>
                <h3 className="mb-3">1. 개인정보의 수집 항목 및 수집 방법</h3>
                <p className="mb-2">
                  회사는 문의하기 페이지를 통해 다음과 같은 개인정보를 수집합니다.
                </p>
                <p className="mb-2">
                  수집항목: 이름, 이메일, 연락처, 문의내용
                </p>
                <p>
                  수집방법: 웹사이트 내 문의하기 양식을 통한 입력
                </p>
              </section>

              <section>
                <h3 className="mb-3">2. 개인정보의 수집 및 이용 목적</h3>
                <p className="mb-2">
                  수집된 개인정보는 다음의 목적을 위해 사용됩니다.
                </p>
                <p className="mb-2">
                  고객 문의 및 요청사항에 대한 확인·답변
                </p>
                <p>
                  서비스 이용 관련 상담 및 안내
                </p>
              </section>

              <section>
                <h3 className="mb-3">3. 개인정보의 보유 및 이용 기간</h3>
                <p className="mb-2">
                  개인정보는 문의 처리 완료 후 즉시 파기합니다.
                </p>
                <p>
                  단, 법령에서 별도의 보관이 요구되는 경우 해당 기간 동안 보관합니다.
                </p>
              </section>

              <section>
                <h3 className="mb-3">4. 개인정보의 제3자 제공</h3>
                <p className="mb-2">
                  회사는 이용자의 개인정보를 외부에 제공하지 않습니다.
                </p>
                <p>
                  단, 법령에 의거하거나 수사기관의 요청 등 정당한 절차가 있는 경우 예외로 합니다.
                </p>
              </section>

              <section>
                <h3 className="mb-3">5. 개인정보 처리의 위탁</h3>
                <p className="mb-2">
                  회사는 이용자의 동의 없이 개인정보를 외부 업체에 위탁하지 않습니다.
                </p>
                <p>
                  (※ 단, 이메일 발송 등 기술적 처리를 외부 서비스로 수행할 경우, 해당 사실과 업체명을 별도로 공지합니다.)
                </p>
              </section>

              <section>
                <h3 className="mb-3">6. 이용자의 권리</h3>
                <p className="mb-2">
                  이용자는 언제든지 본인의 개인정보에 대해 열람, 수정, 삭제를 요청할 수 있습니다.
                </p>
                <p className="mb-2">
                  요청은 아래 연락처를 통해 가능합니다.
                </p>
                <p className="mb-2">
                  이메일: support@dxblocks.com
                </p>
                <p>
                  문의 접수: 본 웹사이트 내 문의하기 페이지
                </p>
              </section>

              <section>
                <h3 className="mb-3">7. 개인정보의 파기 절차 및 방법</h3>
                <p className="mb-2">
                  파기 절차: 목적이 달성된 개인정보는 즉시 파기됩니다.
                </p>
                <p>
                  파기 방법: 전자적 파일 형태의 정보는 복구 불가능한 기술적 방법으로 삭제합니다.
                </p>
              </section>

              <section>
                <h3 className="mb-3">8. 개인정보보호책임자</h3>
                <p className="mb-2">
                  회사는 개인정보 보호를 총괄·관리하기 위하여 다음과 같이 개인정보보호책임자를 지정하고 있습니다.
                </p>
                <p className="mb-2">성명: 박민호</p>
                <p className="mb-2">이메일: support@dxblocks.com</p>
                <p>연락처: 070-8080-1356</p>
              </section>

              <section>
                <h3 className="mb-3">9. 개인정보처리방침의 변경</h3>
                <p className="mb-2">
                  본 개인정보처리방침은 법령, 지침 또는 내부 정책 변경에 따라 수정될 수 있으며, 변경 시 웹사이트에 공지합니다.
                </p>
                <p className="mt-4">최초 시행일: 2025년 10월 29일</p>
              </section>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
