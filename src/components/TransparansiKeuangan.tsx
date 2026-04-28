"use client";

import { useState } from "react";
import { useTransactionSummary, useTransactions } from "@/hooks/useApi";
import { transaksiInfaq } from "@/data/rw011";
import type { TransactionParams, TransactionSummaryParams } from "@/types/api";

const formatRupiah = (num: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(num);

const formatTanggal = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const MONTHS = [
  { value: 1, label: "Januari" },
  { value: 2, label: "Februari" },
  { value: 3, label: "Maret" },
  { value: 4, label: "April" },
  { value: 5, label: "Mei" },
  { value: 6, label: "Juni" },
  { value: 7, label: "Juli" },
  { value: 8, label: "Agustus" },
  { value: 9, label: "September" },
  { value: 10, label: "Oktober" },
  { value: 11, label: "November" },
  { value: 12, label: "Desember" },
];

function SummarySkeleton() {
  return (
    <div className="p-3">
      <div className="d-flex justify-content-between mb-3">
        <div style={{ width: 100, height: 20, background: "#e0e0e0", borderRadius: 4 }} />
        <div style={{ width: 120, height: 20, background: "#e0e0e0", borderRadius: 4 }} />
      </div>
      <div className="d-flex justify-content-between mb-3">
        <div style={{ width: 120, height: 20, background: "#e0e0e0", borderRadius: 4 }} />
        <div style={{ width: 100, height: 20, background: "#e0e0e0", borderRadius: 4 }} />
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <div style={{ width: 60, height: 24, background: "#e0e0e0", borderRadius: 4 }} />
        <div style={{ width: 140, height: 24, background: "#e0e0e0", borderRadius: 4 }} />
      </div>
    </div>
  );
}

function TableSkeleton() {
  return (
    <tbody>
      {Array.from({ length: 5 }).map((_, i) => (
        <tr key={i}>
          <td><div style={{ width: 30, height: 20, background: "#e0e0e0", borderRadius: 4 }} /></td>
          <td><div style={{ width: 120, height: 20, background: "#e0e0e0", borderRadius: 4 }} /></td>
          <td><div style={{ width: "80%", height: 20, background: "#e0e0e0", borderRadius: 4 }} /></td>
          <td><div style={{ width: 60, height: 24, background: "#e0e0e0", borderRadius: 4 }} /></td>
          <td><div style={{ width: 100, height: 20, background: "#e0e0e0", borderRadius: 4, marginLeft: "auto" }} /></td>
        </tr>
      ))}
    </tbody>
  );
}

export const TransparansiKeuanganSection = () => {
  const currentDate = new Date();
  const [filter, setFilter] = useState<"" | "IN" | "OUT">("");
  const [month, setMonth] = useState<number | "">(currentDate.getMonth() + 1);
  const [year, setYear] = useState<number>(currentDate.getFullYear());

  // Generate year options (current year and 5 years back)
  const yearOptions = Array.from({ length: 6 }, (_, i) => currentDate.getFullYear() - i);

  const transactionParams: TransactionParams = {
    per_page: 50,
    ...(filter && { mutation: filter }),
    ...(month && { month }),
    year,
  };

  const summaryParams: TransactionSummaryParams = {
    ...(month && { month }),
    year,
  };

  const { data: summaryData, isLoading: summaryLoading, isError: summaryError } = useTransactionSummary(summaryParams);
  const { data: transactionData, isLoading: transactionLoading, isError: transactionError } = useTransactions(transactionParams);

  // Fallback ke data lokal jika API error
  const localSummary = {
    totalMasuk: transaksiInfaq.filter((t) => t.jenis === "masuk").reduce((sum, t) => sum + t.jumlah, 0),
    totalKeluar: transaksiInfaq.filter((t) => t.jenis === "keluar").reduce((sum, t) => sum + t.jumlah, 0),
  };
  const localSaldo = localSummary.totalMasuk - localSummary.totalKeluar;

  const summary = summaryError || !summaryData?.data
    ? {
        total_in: localSummary.totalMasuk,
        total_out: localSummary.totalKeluar,
        current_balance: localSaldo,
        formatted: {
          total_in: formatRupiah(localSummary.totalMasuk),
          total_out: formatRupiah(localSummary.totalKeluar),
          current_balance: formatRupiah(localSaldo),
        },
      }
    : summaryData.data;

  // Transform local data untuk fallback
  const localTransactions = transaksiInfaq
    .filter((t) => !filter || (filter === "IN" ? t.jenis === "masuk" : t.jenis === "keluar"))
    .map((t, i) => ({
      id: i,
      mutation: t.jenis === "masuk" ? "IN" as const : "OUT" as const,
      description: t.keterangan,
      transaction_date: t.tanggal,
      amount: t.jumlah,
      type: { id: 0, name: t.jenis === "masuk" ? "Pemasukan" : "Pengeluaran" },
    }));

  const transactions = transactionError || !transactionData?.data
    ? localTransactions
    : transactionData.data;

  const handleResetFilter = () => {
    setFilter("");
    setMonth(currentDate.getMonth() + 1);
    setYear(currentDate.getFullYear());
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row g-4">
          {/* Sidebar Ringkasan */}
          <div className="col-lg-4">
            <div className="main-sidebar">
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Ringkasan Keuangan</h3>
                </div>
                {summaryLoading ? (
                  <SummarySkeleton />
                ) : (
                  <div className="p-3">
                    <div className="d-flex justify-content-between mb-3">
                      <span>Total Pemasukan</span>
                      <strong className="text-success">
                        {summary.formatted?.total_in || formatRupiah(summary.total_in)}
                      </strong>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Total Pengeluaran</span>
                      <strong className="text-danger">
                        {summary.formatted?.total_out || formatRupiah(summary.total_out)}
                      </strong>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span>
                        <strong>Saldo</strong>
                      </span>
                      <strong style={{ fontSize: "18px", color: "var(--theme-color)" }}>
                        {summary.formatted?.current_balance || formatRupiah(summary.current_balance)}
                      </strong>
                    </div>
                  </div>
                )}
              </div>

              {/* Filter Periode */}
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Filter Periode</h3>
                </div>
                <div className="p-3">
                  <div className="row g-2">
                    <div className="col-6">
                      <select
                        className="form-select form-select-sm"
                        value={month}
                        onChange={(e) => setMonth(e.target.value ? Number(e.target.value) : "")}
                      >
                        <option value="">Semua</option>
                        {MONTHS.map((m) => (
                          <option key={m.value} value={m.value}>
                            {m.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-6">
                      <select
                        className="form-select form-select-sm"
                        value={year}
                        onChange={(e) => setYear(Number(e.target.value))}
                      >
                        {yearOptions.map((y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter Jenis */}
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Filter Jenis</h3>
                </div>
                <div className="p-3">
                  <div className="d-flex flex-column gap-2">
                    <button
                      className={`btn ${filter === "" ? "btn-primary" : "btn-outline-secondary"}`}
                      onClick={() => setFilter("")}
                    >
                      <i className="fas fa-list me-2" />
                      Semua Transaksi
                    </button>
                    <button
                      className={`btn ${filter === "IN" ? "btn-success" : "btn-outline-success"}`}
                      onClick={() => setFilter("IN")}
                    >
                      <i className="fas fa-arrow-down me-2" />
                      Pemasukan
                    </button>
                    <button
                      className={`btn ${filter === "OUT" ? "btn-danger" : "btn-outline-danger"}`}
                      onClick={() => setFilter("OUT")}
                    >
                      <i className="fas fa-arrow-up me-2" />
                      Pengeluaran
                    </button>
                  </div>
                  <button
                    className="btn btn-link text-muted w-100 mt-3"
                    onClick={handleResetFilter}
                  >
                    <i className="fas fa-undo me-2" />
                    Reset Filter
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabel Transaksi */}
          <div className="col-lg-8">
            <div className="section-title mb-4">
              <h2 className="mt-char-animation">Riwayat Transaksi Keuangan</h2>
              <p className="text-muted">
                {month ? MONTHS.find((m) => m.value === month)?.label : "Semua bulan"} {year}
                {filter === "IN" && " - Pemasukan"}
                {filter === "OUT" && " - Pengeluaran"}
              </p>
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th style={{ width: "50px" }}>No</th>
                    <th>Tanggal</th>
                    <th>Keterangan</th>
                    <th>Tipe</th>
                    <th className="text-end">Jumlah</th>
                  </tr>
                </thead>
                {transactionLoading ? (
                  <TableSkeleton />
                ) : transactions.length === 0 ? (
                  <tbody>
                    <tr>
                      <td colSpan={5} className="text-center py-4 text-muted">
                        <i className="fas fa-inbox fa-2x mb-2 d-block" />
                        Tidak ada transaksi untuk periode ini
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    {transactions.map((trx, i) => {
                      const amount = typeof trx.amount === "string" ? parseFloat(trx.amount) : trx.amount;
                      return (
                        <tr key={trx.id || i}>
                          <td>{i + 1}</td>
                          <td>{formatTanggal(trx.transaction_date)}</td>
                          <td>{trx.description || "-"}</td>
                          <td>
                            <span
                              className="badge"
                              style={{
                                background: trx.mutation === "IN" ? "#28a745" : "#dc3545",
                              }}
                            >
                              {trx.type?.name || (trx.mutation === "IN" ? "Pemasukan" : "Pengeluaran")}
                            </span>
                          </td>
                          <td
                            className="text-end"
                            style={{
                              color: trx.mutation === "IN" ? "#28a745" : "#dc3545",
                              fontWeight: "bold",
                            }}
                          >
                            {trx.mutation === "IN" ? "+" : "-"}
                            {formatRupiah(amount)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>
            </div>

            {/* Pagination info */}
            {transactionData?.meta && (
              <div className="text-muted text-center mt-3">
                Menampilkan {transactionData.data.length} dari {transactionData.meta.total} transaksi
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
