export default function DateSpotSection() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
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
        <h2 style={{ marginBottom: 16 }}>내 주변 반려견 동반 데이트 스팟</h2>
        <p style={{ marginBottom: 24 }}>
          펫과의 소중한 데이트 경험을 쌓아 줄 내 주변 장소를 추천 드려요!
        </p>
        <div style={{ height: 800, width: '100%', border: '1px solid red' }} />
      </div>
    </section>
  );
}
