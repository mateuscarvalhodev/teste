const billing = [
  { estado: 'SP', value: 67836.43 },
  { estado: 'RJ', value: 36678.66 },
  { estado: 'MG', value: 29229.88 },
  { estado: 'ES', value: 27165.48 },
  { estado: 'Outros', value: 19849.53 }
];

const totalAmount = billing.reduce((sum, current) => sum + current.value, 0);

const percent = billing.map(item => {
  return {
    estado: item.estado,
    percentage: ((item.value /totalAmount) *100).toFixed(2)
  }
});

console.log(percent);

