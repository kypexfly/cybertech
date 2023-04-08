interface Props {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { id } = params;
  return <div>Product ID: {id} </div>;
}
