import YoutubePlayer from 'react-native-youtube-iframe';
import { View } from 'react-native';

export const Player = () => {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <YoutubePlayer height={400} play={true} videoId={'42Lu81wmQOY'} />
    </View>
  );
};
