/**
 * AG Grid Table entry point.
 * Import from "@bloom-housing/ui-components/ag-table" to use AgTable/AgPagination.
 * Kept on a subpath so apps that don't use the table don't bundle ag-grid.
 */
export {
  AgTable,
  useAgTable,
  type AgTableProps,
  type AgTableConfig,
  type AgTableData,
  type AgTablePagination,
  type AgTableSearch,
  type AgTableSelectConfig,
  type AgTableSort,
  type ColumnOrder,
} from "./src/tables/AgTable"
export { AgPagination, AG_PER_PAGE_OPTIONS } from "./src/tables/AgPagination"
