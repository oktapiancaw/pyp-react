/* eslint-disable react/prop-types */
import { useState } from "react";
const DebtForm = (props) => {
  const [getName, setName] = useState("");
  const [getNominal, setNominal] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();

    const newDebt = {
      id: Math.floor(Math.random() * 100) + 1,
      name: getName,
      nominal: formatRupiah(getNominal),
      date: "Fri, 25 Jun 2021",
      status: 1,
    };
    props.onCreateDebt(newDebt);
  };

  const handleInputName = (event) => {
    setName(event.target.value);
  };
  const handleInputNominal = (event) => {
    setNominal(event.target.value);
  };

  const formatRupiah = (angka) => {
    let number_string = angka.replace(/[^,\d]/g, "").toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return rupiah;
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-sm font-medium mb-1 ml-1">Add Debt</h2>
      <input
        className="my-1 py-1 pl-2 w-full border-2 text-sm text-gray-700 rounded"
        placeholder="Name"
        onChange={handleInputName}
      />
      <input
        className="my-1 py-1 pl-2 w-full border-2 text-sm text-gray-700 rounded"
        placeholder="Nominal"
        onChange={handleInputNominal}
      />
      <input
        type="date"
        className="my-1 py-1 pl-2 w-full border-2 text-sm text-gray-700 rounded"
        placeholder="Date"
      />
      <button
        type="submit"
        className="w-full py-1 px-2 mt-4 flex items-center justify-center bg-gray-600 rounded"
      >
        <span className="text-white tracking-wide">Create</span>
      </button>
    </form>
  );
};

export default DebtForm;
