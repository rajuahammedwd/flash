import React from 'react';

const DetailsPage =async ({ params }) => {
    
    // const [data, setData] = useState(null);
    const response = await fetch(
      "https://raw.githubusercontent.com/rajuahammedwd/flash/main/public/fakeData.json"
  );
  const data = await response.json();
  console.log(data)
  

    return (
        <div>
            
        </div>
    );
};

export default DetailsPage;
