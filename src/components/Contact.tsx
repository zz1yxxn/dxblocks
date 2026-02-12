import { useState, FormEvent } from 'react';
import { toast } from 'sonner@2.0.3';
import emailjs from '@emailjs/browser';
import { Checkbox } from './ui/checkbox';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agreed) {
      toast.error('개인정보 수집 및 이용에 동의해주세요.', {
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 🔑 아래 3개 값을 EmailJS에서 받은 값으로 교체하세요
      const SERVICE_ID = 'YOUR_SERVICE_ID';      // 예: 'service_abc1234'
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // 예: 'template_xyz5678'
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // 예: 'abcXYZ123456'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'support@dxblocks.com',
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      toast.success('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.', {
        duration: 3000,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setAgreed(false);
    } catch (error) {
      console.error('이메일 전송 실패:', error);
      toast.error('문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.', {
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-16 px-8 bg-black text-gray-100">
      <h2 className="text-center text-white mb-3 text-[35px]">문의하기</h2>
      <p className="text-center text-[25px] mb-10 text-white/70 font-[Almarai]">Contact Us</p>

      <form
        onSubmit={handleSubmit}
        className="max-w-[600px] w-full bg-white/10 p-8 rounded-[15px] backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.05)]"
      >
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-gray-100">
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름을 입력해주세요"
            required
            className="w-full py-2.5 px-4 border border-white/30 rounded-lg bg-white/5 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-gray-100">
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일을 입력해주세요"
            required
            className="w-full py-2.5 px-4 border border-white/30 rounded-lg bg-white/5 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2 text-gray-100">
            연락처
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="연락처를 입력해주세요"
            className="w-full py-2.5 px-4 border border-white/30 rounded-lg bg-white/5 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="block mb-2 text-gray-100">
            문의내용
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="문의하실 내용을 입력해주세요"
            required
            className="w-full py-2.5 px-4 border border-white/30 rounded-lg bg-white/5 text-white placeholder:text-gray-400 min-h-[120px] resize-y"
          />
        </div>

        <div className="mb-6 flex items-start gap-3">
          <Checkbox
            id="privacy-agreement"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
            className="mt-1 border-cyan-400 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
          />
          <label
            htmlFor="privacy-agreement"
            className="text-sm text-gray-200 leading-relaxed cursor-pointer"
          >
            개인정보 수집 및 이용에 동의합니다. <span className="text-cyan-400">*</span>
            <br />
            <span className="text-xs text-gray-400">
              (수집항목: 이름, 이메일, 연락처, 문의내용<br className="md:hidden" />
              <span className="hidden md:inline"> | </span>
              <span className="md:hidden">{' '}</span>이용목적: 문의 응대<br className="md:hidden" />
              <span className="hidden md:inline"> | </span>
              <span className="md:hidden">{' '}</span>보유기간: 처리 완료 후 즉시 파기)
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !agreed}
          className="w-auto px-12 py-3 mx-auto block bg-cyan-500/20 text-cyan-300 border border-cyan-400 rounded-lg cursor-pointer transition-all hover:-translate-y-0.5 hover:bg-cyan-500/30 hover:shadow-[0_8px_20px_rgba(34,211,238,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '전송 중...' : '문의 보내기'}
        </button>
      </form>
    </section>
  );
}
