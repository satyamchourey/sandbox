import { useEffect, useState } from 'react'
import '../App.css'
export default function DataTable() {
    const [isEditing, setEdit] = useState(false);
    const [data, setData] = useState([
        { month: 'January', savings: '$100' },
        { month: 'February', savings: '$80' },
    ]);

    const handleChange= (i , key , newVal)=>{
        let updatedData = [...data]
        updatedData[i][key] = newVal
        setData(updatedData)
    }
    return (
        <>
            <h1>Editable DataTable</h1>
            <button onClick={() => setEdit(!isEditing)}>{isEditing ? 'Save' : 'Edit'}</button>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Savings</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            <td>
                                <input
                                    value={row.month}
                                    disabled={!isEditing}
                                    onChange={(e) => handleChange(i, 'month', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    value={row.savings}
                                    disabled={!isEditing}
                                    onChange={(e) => handleChange(i, 'savings', e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}