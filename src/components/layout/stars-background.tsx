import { BackgroundDesktop } from '@/assets/images';

export default function StarsBackground() {
  return (
    <div
      className="absolute inset-0 animate-stars -z-10"
      style={{
        backgroundImage: `url(${BackgroundDesktop.src})`,
        backgroundRepeat: 'repeat',
      }}
    />
  );
}