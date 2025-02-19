interface cardStackProps{
  area: string;
  stacks: string;
}

function CardStack(props: cardStackProps) {
  return (
    <div className="border-2 border-gray-300 rounded-lg">
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">
          {props.area}</h3>

        <p className="text-sm text-gray-600 mb-2">
          {props.stacks}</p>
      </div>
    </div>
  )
}

export default CardStack