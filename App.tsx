import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Canvas,
  Path,
  Rect,
  Text,
  useFont,
  Skia,
} from '@shopify/react-native-skia';

const text1 = 'sm case';
const text2 = 'CamelCase';

function TestText({size, y}: {size: number; y: number}) {
  const font = useFont(require('./assets/OpenSans-Regular.ttf'), size);

  if (!font) {
    return <></>;
  }

  const textBounds1 = font.measureText(text1);
  const textBounds2 = font.measureText(text2);
  console.log('Text, size', size, textBounds1.height, textBounds2.height);

  return (
    <>
      <Rect
        rect={{
          width: textBounds1.width,
          height: -textBounds1.height,
          x: 30,
          y: y,
        }}
        color="red"
        opacity={0.5}
      />
      <Text font={font} text={text1} y={y} x={30} color="black" />

      <Rect
        rect={{
          width: textBounds2.width,
          height: -textBounds2.height,
          x: 30,
          y: y + size * 1.5,
        }}
        color="red"
        opacity={0.5}
      />
      <Text font={font} text={text2} y={y + size * 1.5} x={30} color="black" />
    </>
  );
}

function TestTextWithPath({size, y}: {size: number; y: number}) {
  const font = useFont(require('./assets/OpenSans-Regular.ttf'), size);
  if (!font) {
    return <></>;
  }

  const path1 = Skia.Path.MakeFromText(text1, 30, y, font);
  const path2 = Skia.Path.MakeFromText(text2, 30, y + size * 1.5, font);
  if (!path1 || !path2) {
    return <></>;
  }

  const textBounds1 = path1.computeTightBounds();
  const textBounds2 = path2.computeTightBounds();

  console.log('Path, size', size, textBounds1.height, textBounds2.height);

  return (
    <>
      <Rect
        rect={{
          width: textBounds1.width,
          height: -textBounds1.height,
          x: 30,
          y: y,
        }}
        color="green"
        opacity={0.5}
      />
      <Path path={path1} color="black" />

      <Rect
        rect={{
          width: textBounds2.width,
          height: -textBounds2.height,
          x: 30,
          y: y + size * 1.5,
        }}
        color="green"
        opacity={0.5}
      />
      <Path path={path2} color="black" />
    </>
  );
}

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Canvas style={styles.canvas}>
        <TestText size={10} y={30} />
        <TestText size={20} y={110} />
        <TestText size={30} y={200} />

        <TestTextWithPath size={20} y={300} />
        <TestTextWithPath size={30} y={400} />
      </Canvas>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    flex: 1,
  },
});

export default App;
