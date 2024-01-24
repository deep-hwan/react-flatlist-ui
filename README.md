# <div align="right">

<h1>react-flatList-ui</h1>
<img alt="Logo" align="right" src="./src/assets/flatlist-logo.svg" width="22%" />

<p>
The FlatList used by React-Native is also available in React.js🔥🔥

FlatList is a utility component UI that makes it easy to handle **data rendering lists**,
and it **makes grouping**, **sorting**, **UI expansion**, **styling**, and more ...

It is also easy to process the number of data corresponding to media srceen on the screen

</p>
</div>

[![GitHub](https://img.shields.io/github/license/beforesemicolon/flatlist-react)](https://github.com/deep-hwan/react-flatlist-ui/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/flatlist-react)](https://github.com/deep-hwan/react-flatlist-ui)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/beforesemicolon/flatlist-react)](https://github.com/deep-hwan/react-flatlist-ui)

# react-flatlist-ui

</div>

## Install

    npm install react-flatlist-ui

    yarn add react-flatlist-ui

---

## How to use

```ts
// This dummyData
dummyData = [
  { id: 1, name: "Correia", img: "https://images.unsplash.com/photo-1234568" },
  { id: 2, name: "Sam", img: "https://images.unsplash.com/photo-1234568" },
  { id: 3, name: "John", img: "https://images.unsplash.com/photo-1234568" },
  { id: 4, name: "James", img: "https://images.unsplash.com/photo-1234568" },
  { id: 5, name: "Steam", img: "https://images.unsplash.com/photo-1234568" },
  { id: 6, name: "Hwan", img: "https://images.unsplash.com/photo-1234568" },
  { id: 7, name: "John", img: "https://images.unsplash.com/photo-1234568" },
  { id: 8, name: "Key", img: "https://images.unsplash.com/photo-1234568" },
  { id: 9, name: "Min", img: "https://images.unsplash.com/photo-1234568" },
  { id: 10, name: "Ellan", img: "https://images.unsplash.com/photo-1234568" },
];
```

We get the values of dummyData through the data in FlatList, and we pass the unique key values to the keyExtractor, and we get the components through randerItem.
This allows you to experience a higher level of performance by taking notes of data.

**🔥👍This method is very similar to FlatList in React-Native. Try FlatList in React.js right now🔥👍**

```tsx
import FlatList from 'react-flatList-ui';

...
function App() {
  return (
    <FlatList
      direction="horizontal" // vertical or horizontal
      data={dummyData} // data
      dataCount={dummyData.length} // count
      keyExtractor={(i) => i} // item key
      renderItem={(item) => <Item name={item.name} img={item.img} />} // rendering items
      itemHorizontalCount={{ desktop: 3, tablet: 2, mobile: 1 }} // if horizontal : media screen data count
      ItemSeparatorComponent={{<div style={{width:'100%', height:1, backgroundColor:'#eeeeee'}}></div>}} //components between data
      ListEmptyComponent={<p>Data does not exist ...</p>} // if noneData : view component
      gap={15}
      crossGap={15}
      itemScrollbarView={false} // scrollbar
    />
  );
}
...

```

---

## Use Documentation

| Props                        | Type                                                                                                                                                                                            | Features                                                       | Description                                                                                                                                                                                                                                                                                                                    | Default                          |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| data (\*)                    | any[]                                                                                                                                                                                           | data                                                           | Gets the data to sort in the list                                                                                                                                                                                                                                                                                              |
| dataCount                    | number                                                                                                                                                                                          | dataCount                                                      | Enter the total number or length of data                                                                                                                                                                                                                                                                                       |                                  |
| keyExtractor (\*)            | (item?: any, index?: number) => string , number                                                                                                                                                 | list key                                                       | The unique id value of the passing data must be passed to the key                                                                                                                                                                                                                                                              |                                  |
| renderItem (\*)(Memoization) | (item?: any, index?: number) => ReactElement                                                                                                                                                    | rendering of data items                                        | Effective rendering of dynamic lists and optimized processing for performance and memory use                                                                                                                                                                                                                                   |                                  |
| ItemSeparatorComponent       | ReactElement                                                                                                                                                                                    | Components between listItem                                    | You can handle another element between the elements imported into data                                                                                                                                                                                                                                                         | ---                              |
| ListEmptyComponent           | ReactElement                                                                                                                                                                                    | Screen element when data does not exist                        | You can expose custom elements when data does not exist                                                                                                                                                                                                                                                                        |                                  |
| direction                    | horizontalvertical                                                                                                                                                                              | Determine the sort of items imported into the data             | horizontal : horizontal alignment of datavertical: data vertical alignment                                                                                                                                                                                                                                                     | vertical                         |
| itemHorizontalCount          | desktop: number tablet: number mobile: number                                                                                                                                                   | Number of data exposed in one line during horizontal alignment | Number of data exposed in one line during horizontal alignmentdesktop: By default, the number of data in a single line that is exposedtable : The number of tablets exposed to the resolution of the tablet with a width of 1080 or lessmobile : the number of data in a line exposed to mobile resolution less than 600 width | desktop:1 tablet:1 mobile:1      |
| itemGap                      | number                                                                                                                                                                                          | Distance between data items based on direction                 | Distance between data items based on direction                                                                                                                                                                                                                                                                                 | 10                               |
| ---                          | ---                                                                                                                                                                                             | ---                                                            | ---                                                                                                                                                                                                                                                                                                                            | ---                              |
| itemCrossGap                 | number                                                                                                                                                                                          | Distance between data item counteraxes based on direction      | Distance between data item counteraxes based on direction                                                                                                                                                                                                                                                                      | 10                               |
| size                         | width: "auto" , "100%" , "100vw"height: "auto" , "100%" , "100vh"minWidth: number , stringmaxWidth: number , stringminHeight: number , stringmaxHeight: number , string                         | Adjust the entire area of the flatList                         | Adjust the entire area of the flatList                                                                                                                                                                                                                                                                                         | width:100%height:100%            |
| display                      | reverse: booleanalign: "start" , "end" , "center" , "stretch"crossAlign: "start" , "end" , "center" , "space-between" , "space-around" , "space-evenly"wrap: "nowrap" , "wrap" , "wrap-reverse" | Determine the alignment of items in the Data element           | reverse : decide whether to reverse the item in the dataalignment : vertical horizontal alignment based on directioncrossAlign : vertical horizontal alignment of the opposite axis of direction referencewrap : Decides whether to move to the next line when the direction is horizontal                                     | direction === horizontal && wrap |
| itemScrollbarView            | boolean                                                                                                                                                                                         | Whether the scrollbar is exposed in the flatList               | size.maxHeight lets you set the maximum height value for the FlatList, which allows you to decide whether to expose the scrollbar when scrolling occurs                                                                                                                                                                        | False                            |
| padding                      | all: number , stringhorizontal: number , stringvertical: number , stringtop: number , stringbottom: number , stringleft: number , stringright: number , string                                  | Determines the padding value of the FlatList                   | all: full & all valuehorizontal: horizontal valuevertical: vertical valuetop: top valueBottom: bottom valueleft: left valueright: right value                                                                                                                                                                                  |                                  |
| margin                       | all: number , stringhorizontal: number , stringvertical: number , stringtop: number , stringbottom: number , stringleft: number , stringright: number , string                                  | Determines the margin value of the FlatList                    | all: full & all valuehorizontal: horizontal valuevertical: vertical valuetop: top valueBottom: bottom valueleft: left valueright: right value                                                                                                                                                                                  |                                  |
| ref                          | HTMLUListElement                                                                                                                                                                                |                                                                |                                                                                                                                                                                                                                                                                                                                |                                  |
| …props                       |                                                                                                                                                                                                 |                                                                |                                                                                                                                                                                                                                                                                                                                |                                  |

---

## License

MIT © Deepfactory, Inc. See [LICENSE](LICENSE) for details.

<!-- BOTTOM LOGO -->
<a title="DEEP" href="https://www.deepfactory.kr/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./src/assets/deep-white.png">
    <img alt="Toss" src="./src/assets/deep-dark.png" width="120">
  </picture>
</a>
