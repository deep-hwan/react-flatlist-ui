import React, { useState } from "react";
import { FlatList } from "./lib/FlatList";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="App"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 460,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FlatList
          direction="horizontal"
          display={{ wrap: "nowrap" }}
          itemHorizontalCount={{ desktop: 3, tablet: 2, mobile: 1 }}
          padding={{ vertical: 16 }}
          margin={{ bottom: 20 }}
          data={dummyData}
          dataCount={dummyData.length}
          loading={loading}
          ListLoadingComponent={<p>loading...</p>}
          ListHeaderComponent={<h1>Title: FlatList</h1>}
          ListFooterComponent={<span>data finish ...</span>}
          ListEmptyComponent={<p>데이터가 존재하지 않습니다</p>}
          keyExtractor={(i) => i}
          // listScrollbarView
          // listScrollActive
          renderItem={(item) => (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export const dummyData = [
  {
    id: 1,
    name: "data_name1",
    img: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "data_name2",
    img: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "data_name3",
    img: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "data_name4",
    img: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "data_name5",
    img: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "data_name6",
    img: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "data_name7",
    img: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "data_name8",
    img: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "data_name9",
    img: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "data_name10",
    img: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
