export default function Card({ id, name, image, onClick }) {
  return (
    <>
      <div onClick={() => onClick(id)} className="card">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    </>
  );
}
