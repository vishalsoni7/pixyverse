import "../switch/switch.css";

export const Switch = () => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};
