import './index.css';

function App() {
  const namaPanggilan = 'Aul';
  const saldoAwal = 37;
  const jam = 9;
  return(
    <>
    <div className='panel'>
      <h1 className='judul' style={{color: 'darkBlue', fontSize: '32px'}}>Kantin {namaPanggilan}</h1>
      <p style={{color: 'blue'}}>Selamat {jam < 12 ? 'Pagi' : 'siang'}</p>
      <p>Saldo Awal Kartu Kantin: Rp{saldoAwal * 1000}</p>
      <button disabled>Bayar</button>
    </div>
    </>
  );
}

export default App;
