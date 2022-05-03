interface ColoredProps {
  color: string;
  text?: string;
}

const Colored = ({ color = '#ffffff', text = '' }: ColoredProps) => {
  return (
    <div style={{ backgroundColor: color, width: 100, height: 100 }}>
      <p>I'm Colored</p>
      <p>Parent: {text}</p>
    </div>
  );
};

export default Colored;
