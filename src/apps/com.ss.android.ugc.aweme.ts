import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '直播游戏推荐',
      rules: {
        matches:
          '[id="com.ss.android.ugc.aweme:id/n_="] View[childCount > 2] View[childCount = 1] + View',
      },
    },
    {
      key: 1,
      name: '视频描述广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[id="com.ss.android.ugc.aweme:id/close"]',
        },
      ],
    },
    {
      key: 2,
      name: '直播满意度调查',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: 'LynxFlattenUI[text^="满意"] - LynxFlattenUI[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/15531325',
        },
      ],
    },
  ],
});
