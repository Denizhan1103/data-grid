export interface ComponentProperties {
  data: unknown[];
  meta: TableMeta;
  header: TableHeader[];
}

export interface TableHeader {
  name: string;
  accessor: string;
  sortable?: boolean;
  defaultSortingValue?: "increment" | "decrement";
}

export interface TableMeta {
  totalDataCount: number;
  currentPage: number;
  rowPerPage: number;
}
