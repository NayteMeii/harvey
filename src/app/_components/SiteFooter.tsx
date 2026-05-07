import { AnimatedButton } from './AnimatedButton'

export function SiteFooter() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-0 h-[500px] overflow-hidden bg-black pt-12 xl:h-[520px]">
      <div className="xl:hidden flex flex-col gap-12 px-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="font-light italic uppercase text-white text-[24px]" style={{ letterSpacing: '-0.96px', lineHeight: '1.1' }}>
              Have a <strong className="font-black not-italic">project</strong> in mind?
            </p>
            <AnimatedButton href="/lets-talk" className="w-fit rounded-full border border-white px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white">
              Let&apos;s talk
            </AnimatedButton>
          </div>
          <div className="flex flex-col gap-4">
            {['Facebook', 'Instagram', 'X.com', 'Linkedin'].map((s) => (
              <p key={s} className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>{s}</p>
            ))}
          </div>
          <div className="w-full h-px bg-white/20" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-8">
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Licences</span>
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Privacy policy</span>
          </div>
          <p className="font-mono text-white text-[10px] uppercase" style={{ letterSpacing: '0' }}>[ Coded By Claude ]</p>
          <p
            className="font-semibold capitalize text-white"
            style={{ fontSize: '91px', letterSpacing: '-5.5px', lineHeight: '0.8' }}
          >
            H.Studio
          </p>
        </div>
      </div>

      <div className="hidden xl:flex flex-col gap-[120px] px-8">
        <div className="flex flex-col gap-12">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-3 w-[298px]">
              <p className="font-light italic uppercase text-white text-[24px]" style={{ letterSpacing: '-0.96px', lineHeight: '1.1' }}>
                Have a <strong className="font-black not-italic">project</strong> in mind?
              </p>
              <AnimatedButton href="/lets-talk" className="w-fit rounded-full border border-white px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white">
                Let&apos;s talk
              </AnimatedButton>
            </div>
            <div className="text-center w-[298px]">
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>Facebook</p>
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>Instagram</p>
            </div>
            <div className="text-right w-[298px]">
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>X.com</p>
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>Linkedin</p>
            </div>
          </div>
          <div className="w-full h-px bg-white/20" />
        </div>

        <div className="flex items-end justify-between">
          <div className="relative overflow-hidden shrink-0" style={{ height: '219px', width: '1093px' }}>
            <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[15px]">
              <p
                className="font-mono text-white text-[14px] uppercase whitespace-nowrap"
                style={{ transform: 'rotate(-90deg)', letterSpacing: '0' }}
              >
                [ Coded By Claude ]
              </p>
            </div>
            <p
              className="absolute font-semibold capitalize text-white whitespace-nowrap"
              style={{
                fontSize: '290px',
                letterSpacing: '-17.4px',
                lineHeight: '0.8',
                bottom: '-13px',
                left: '0',
              }}
            >
              H.Studio
            </p>
          </div>
          <div className="flex gap-[34px] pb-8 shrink-0">
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Licences</span>
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Privacy policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
