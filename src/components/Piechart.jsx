import React from 'react'
import { PieChart,Pie,sector,cell,ResponsiveContainer,Tooltip } from 'recharts'

const Piechart = () => {

     //data 
     const data = [
        {
          name:'a',
          income: 20,
          worktime: 3 
        },
        {
          name:'b',
          income: 30,
          worktime: 2
        },
        {
        name:'c',
        income: 40,
        worktime: 5
        },
        {
          name:'e',
          income: 70,
          worktime: 8
        },
        {
          name:'f',
          income: 80,
          worktime: 9
        },
        {
          name:'g',
          income: 20,
          worktime: 4
        },
        {
          name:'h',
          income: 40,
          worktime: 3
        },
        {
          name:'i',
          income: 90,
          worktime: 5
        },
        {
          name:'j',
          income:10,
          worktime: 2
        }
      ]
    

  return (
    <div>
        <h1>Pie Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <PieChart width="100%" height="100%">
            <Tooltip/>
        <Pie data={data} dataKey="income" cx="50%" cy="50%" outerRadius={100}  fill="#222831" label/> 
        <Pie data={data} dataKey="worktime" cx="50%" cy="50%"  innerRadius={150} outerRadius={ 200} fill="#00ADB5" label/>

        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Piechart
