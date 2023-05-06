export default function HomePage(props: { message: string }) {
  return (
    <div className="tw-container bg-blue-500 p-4">
      <span className="inline rounded p-2 text-blue-500 bg-white">
        {props.message}
      </span>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://app-api:3000/api/v1/status");
  const result = await response.json();

  return {
    props: {
      message: result.message,
    },
  };
}
