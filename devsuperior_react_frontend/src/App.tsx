import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Footer from 'components/Footer/Footer';
import DataTable from 'components/DataTable/DataTable';
import BarChart from 'components/BarChart/BarChart';
import DonutChart from 'components/DonutChart/DonutChart';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-60">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
        </div>
        <div className="col-sm-60">
          <h5 className="text-center text-secondary">Todas as vendas</h5>
          <DonutChart />
        </div>
      <div className="py-3">
        <h2 className="text-primary">Todas as vendas</h2>
      </div>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;