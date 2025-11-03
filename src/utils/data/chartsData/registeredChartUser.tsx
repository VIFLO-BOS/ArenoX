interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}

interface renderCustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}

export const data: ChartData[] = [
  { name: "Total-Registered", value: 2458 },
  { name: "Total-Active-Users", value: 1200 },
  { name: "Total-Inactive-Users", value: 358 },
];

const radian: number = Math.PI / 180;
export const colors: string[] = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: renderCustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * radian);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * radian);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};
