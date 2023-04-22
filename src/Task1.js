import React, { useState } from 'react';

function EmployeeTable({ employees }) {
  const [totalSalary, setTotalSalary] = useState(0);

  const handleDaysChange = (employee, event) => {
    const days = Number(event.target.value);
    const salary = days * employee.rate;
    employee.days = days;
    employee.salary = salary;
    setTotalSalary(calculateTotalSalary());
  };

  const handleRateChange = (employee, event) => {
    const rate = Number(event.target.value);
    const salary = rate * employee.days;
    employee.rate = rate;
    employee.salary = salary;
    setTotalSalary(calculateTotalSalary());
  };

  const calculateTotalSalary = () => {
    return employees.reduce((total, employee) => total + employee.salary, 0);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Кількість днів</th>
            <th>Ставка за день</th>
            <th>Зарплата</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>
                <input
                  type="number"
                  value={employee.days}
                  onChange={(event) => handleDaysChange(employee, event)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={employee.rate}
                  onChange={(event) => handleRateChange(employee, event)}
                />
              </td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Сумарна зарплата: {totalSalary}</p>
    </>
  );
}

function Task1() {
  const employees = [
    { id: 1, firstName: 'Іван', lastName: 'Іванов', days: 20, rate: 100, salary: 2000 },
    { id: 2, firstName: 'Петро', lastName: 'Петров', days: 22, rate: 120, salary: 2640 },
    { id: 3, firstName: 'Марія', lastName: 'Маринина', days: 18, rate: 80, salary: 1440 },
  ];

  return <EmployeeTable employees={employees} />;
}

export default Task1;
