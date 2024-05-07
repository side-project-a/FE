export default function MainSection() {
  return (
    <section
      style={{
        paddingTop: 60,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        background:
          'url(https://ak-d.tripcdn.com/images/05E3s12000cmarxu50A1C.webp)',
        backgroundSize: '100%',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          width: 1200,
          margin: '120px 0 100px ',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ marginBottom: 16 }}>
          함께하는 모든 순간이 즐거운 여행 <span>펫워커</span>
        </h1>
        <p style={{ marginBottom: 24 }}>
          편리하고 만족스럽게! 펫워커와 함께 반려견 맞춤 여행 일정을 짜보세요!
        </p>
        <div style={{ height: 300, width: 550, border: '1px solid red' }} />
      </div>
    </section>
  );
}
