export interface Customer {
  id: string;
  nama_kategori: number;
  nama_layanan: string;
  deskripsi: string;
}

export interface CustomerSource {
  source: Customer;
}
