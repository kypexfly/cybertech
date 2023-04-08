interface Props {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { id } = params;
  return <div className="py-3">Product ID: {id} </div>;
}
