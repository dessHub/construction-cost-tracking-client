import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useReducer, useState } from 'react'

type Material = {
  name: string
  unit: string
  quantity: number
  cost: number
  total: number
}

const defaultData: Material[] = [
  {
    name: 'Bricks',
    unit: 'number',
    quantity: 8000,
    cost: 7,
    total: 56000
  },
  {
    name: '4*2 Frames',
    unit: 'feet',
    quantity: 100,
    cost: 20,
    total: 56000
  },
  {
    name: 'Bricks',
    unit: 'number',
    quantity: 8000,
    cost: 7,
    total: 56000
  },
]

const columnHelper = createColumnHelper<Material>()

const columns = [
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor(row => row.unit, {
    id: 'unit',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Unit</span>,
  }),
  columnHelper.accessor('quantity', {
    header: () => 'Quantity',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('cost', {
    header: 'Cost',
  }),
  columnHelper.accessor('total', {
    header: 'Total',
  })
]

function Table() {
  const [data, setData] = useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <table className='table-auto border-collapse border border-slate-400'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className='bg-gray-300 text-slate-800 text-sm font-semibold border border-slate-400 px-2'>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className='w-auto w-min- text-slate-800 text-sm font-semibold border border-slate-400 px-2'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;