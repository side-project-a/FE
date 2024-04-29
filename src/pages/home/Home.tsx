import { Carousel } from '@/wigets';

export default function Home() {
  return (
    <Carousel>
      <img
        style={{ height: 500, overflow: 'hidden' }}
        src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt896eac623932207c/65ea8be12850972d1c44e349/skarner-splash-v2.jpg"
        alt="temporary img 1"
      />
      <img
        style={{ height: 500, overflow: 'hidden' }}
        src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltd323eefeaebb5f15/65a1786b5a14f2110e18316c/Base_Smolder_-_Final_opt.jpg"
        alt="temporary img 2"
      />
      <img
        style={{ height: 500, overflow: 'hidden' }}
        src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt3e550ad3378fcd45/6567f23aefd9ef13abb83140/Image_0_Header.jpg"
        alt="temporary img 3"
      />
    </Carousel>
  );
}
