
(function () {
  "use strict";

  const I18N = {
    "zh-CN": {
      title: "二维码工具 - 荷萌 HEMENG",
      "荷萌首页": "荷萌首页",
      "← 返回首页": "← 返回首页",
      "二维码工具": "二维码工具",
      "生成二维码，也可以识别已有二维码。尽可能在当前设备本地处理。": "生成二维码，也可以识别已有二维码。尽可能在当前设备本地处理。",
      "生成二维码": "生成二维码",
      "识别二维码": "识别二维码",
      "二维码生成": "二维码生成",
      "普通二维码": "普通二维码",
      "直接编码文字或网址": "直接编码文字或网址",
      "网页展示二维码": "网页展示二维码",
      "扫码打开荷萌页面查看文字": "扫码打开荷萌页面查看文字",
      "输入要放进二维码的内容": "输入要放进二维码的内容",
      "普通二维码直接保存文字或网址，扫码应用如何显示取决于其自身支持情况。": "普通二维码直接保存文字或网址，扫码应用如何显示取决于其自身支持情况。",
      "文字会先保存到荷萌，再将专属网页链接生成二维码。": "文字会先保存到荷萌，再将专属网页链接生成二维码。",
      "网页展示模式会把文字保存到荷萌服务器，分享链接有效期为 30 天。任何获得链接的人都能查看内容，请勿填写密码或私人信息。": "网页展示模式会把文字保存到荷萌服务器，分享链接有效期为 30 天。任何获得链接的人都能查看内容，请勿填写密码或私人信息。",
      "二维码尺寸": "二维码尺寸",
      "纠错等级": "纠错等级",
      "低（L）": "低（L）",
      "中（M）": "中（M）",
      "较高（Q）": "较高（Q）",
      "高（H）": "高（H）",
      "二维码颜色": "二维码颜色",
      "背景颜色": "背景颜色",
      "清空": "清空",
      "二维码将在这里显示": "二维码将在这里显示",
      "等待生成": "等待生成",
      "下载 PNG": "下载 PNG",
      "分享 / 保存图片": "分享 / 保存图片",
      "网页分享链接": "网页分享链接",
      "创作时间": "创作时间",
      "剩余有效时间": "剩余有效时间",
      "复制分享链接": "复制分享链接",
      "二维码会自动添加标准留白。分享功能取决于设备和浏览器的支持情况。": "二维码会自动添加标准留白。分享功能取决于设备和浏览器的支持情况。",
      "识别二维码图片": "识别二维码图片",
      "选择设备中的二维码图片，浏览器会尝试在本地识别，不会主动上传图片。": "选择设备中的二维码图片，浏览器会尝试在本地识别，不会主动上传图片。",
      "复制识别结果": "复制识别结果",
      "清除": "清除",
      "生成与识别尽可能在当前浏览器本地完成。": "生成与识别尽可能在当前浏览器本地完成。",
      "请先输入文字或网址。": "请先输入文字或网址。",
      "网页分享内容不能超过 3000 个字符。": "网页分享内容不能超过 3000 个字符。",
      "二维码组件加载失败，请检查网络后刷新页面。": "二维码组件加载失败，请检查网络后刷新页面。",
      "正在保存分享内容……": "正在保存分享内容……",
      "正在准备……": "正在准备……",
      "正在生成二维码……": "正在生成二维码……",
      "二维码生成失败，请重新尝试。": "二维码生成失败，请重新尝试。",
      "生成失败": "生成失败",
      "生成成功 · 可以下载或分享": "生成成功 · 可以下载或分享",
      "网页展示二维码已生成。扫码后将打开荷萌分享页面。": "网页展示二维码已生成。扫码后将打开荷萌分享页面。",
      "普通二维码已生成，已添加标准留白。": "普通二维码已生成，已添加标准留白。",
      "二维码尚未生成": "二维码尚未生成",
      "图片导出失败": "图片导出失败",
      "服务器返回了无法识别的内容，请稍后重试。": "服务器返回了无法识别的内容，请稍后重试。",
      "创建分享失败，请稍后重试。": "创建分享失败，请稍后重试。",
      "服务器返回的分享地址不正确。": "服务器返回的分享地址不正确。",
      "服务器没有返回完整的分享时间信息，请确认接口已经更新。": "服务器没有返回完整的分享时间信息，请确认接口已经更新。",
      "已过期": "已过期",
      "已发起 PNG 下载。": "已发起 PNG 下载。",
      "图片下载失败，请重新生成二维码。": "图片下载失败，请重新生成二维码。",
      "已打开系统分享面板。": "已打开系统分享面板。",
      "当前浏览器不支持图片分享，已改用 PNG 下载。": "当前浏览器不支持图片分享，已改用 PNG 下载。",
      "已取消分享。": "已取消分享。",
      "分享不可用，请尝试使用下载 PNG。": "分享不可用，请尝试使用下载 PNG。",
      "已复制": "已复制",
      "复制失败，请手动选择上方链接。": "复制失败，请手动选择上方链接。",
      "请选择图片文件。": "请选择图片文件。",
      "识别组件加载失败，请检查网络后刷新页面。": "识别组件加载失败，请检查网络后刷新页面。",
      "正在读取图片……": "正在读取图片……",
      "识别成功。": "识别成功。",
      "没有识别到二维码，请尝试更清晰、完整的图片。": "没有识别到二维码，请尝试更清晰、完整的图片。",
      "图片处理失败，请尝试其他图片。": "图片处理失败，请尝试其他图片。",
      "图片读取失败。": "图片读取失败。",
      "已复制识别结果。": "已复制识别结果。",
      "浏览器不允许自动复制，请长按识别结果手动复制。": "浏览器不允许自动复制，请长按识别结果手动复制。"
    },

    "zh-TW": {
      "荷萌首页": "荷萌首頁",
      "← 返回首页": "← 返回首頁",
      "二维码工具": "QR Code 工具",
      "生成二维码": "產生 QR Code",
      "识别二维码": "辨識 QR Code",
      "二维码生成": "QR Code 產生",
      "普通二维码": "一般 QR Code",
      "直接编码文字或网址": "直接編碼文字或網址",
      "网页展示二维码": "網頁展示 QR Code",
      "扫码打开荷萌页面查看文字": "掃描後開啟荷萌頁面查看文字",
      "输入要放进二维码的内容": "輸入要放進 QR Code 的內容",
      "例如：https://lowcrush.asia\n也可以输入普通文字、联系方式等": "例如：https://lowcrush.asia\n也可以输入普通文字、联系方式等",
"二维码已生成，但图片导出失败，请重试。": "二维码已生成，但图片导出失败，请重试。",
"生成失败，内容可能过长或格式不受支持。": "生成失败，内容可能过长或格式不受支持。",
"生成失败，请稍后重试。": "生成失败，请稍后重试。",
      "例如：https://lowcrush.asia\n也可以输入普通文字、联系方式等": "例如：https://lowcrush.asia\n也可以輸入一般文字、聯絡方式等",
"二维码已生成，但图片导出失败，请重试。": "QR Code 已產生，但圖片匯出失敗，請再試一次。",
"生成失败，内容可能过长或格式不受支持。": "產生失敗，內容可能過長或格式不受支援。",
"生成失败，请稍后重试。": "產生失敗，請稍後再試。",
      "例如：https://lowcrush.asia\n也可以输入普通文字、联系方式等": "Example: https://lowcrush.asia\nYou can also enter text or contact details.",
"二维码已生成，但图片导出失败，请重试。": "QR code created, but image export failed. Please try again.",
"生成失败，内容可能过长或格式不受支持。": "Generation failed. The content may be too long or unsupported.",
"生成失败，请稍后重试。": "Generation failed. Please try again later.",
      "例如：https://lowcrush.asia\n也可以输入普通文字、联系方式等": "例：https://lowcrush.asia\n通常のテキストや連絡先も入力できます。",
"二维码已生成，但图片导出失败，请重试。": "QRコードは作成されましたが、画像の書き出しに失敗しました。もう一度お試しください。",
"生成失败，内容可能过长或格式不受支持。": "作成に失敗しました。内容が長すぎるか、対応していない形式の可能性があります。",
"生成失败，请稍后重试。": "作成に失敗しました。しばらくしてからもう一度お試しください。",
      "例如：https://lowcrush.asia\n也可以输入普通文字、联系方式等": "예: https://lowcrush.asia\n일반 텍스트나 연락처 정보도 입력할 수 있습니다.",
"二维码已生成，但图片导出失败，请重试。": "QR 코드는 생성되었지만 이미지 내보내기에 실패했습니다. 다시 시도하세요.",
"生成失败，内容可能过长或格式不受支持。": "생성에 실패했습니다. 내용이 너무 길거나 지원되지 않는 형식일 수 있습니다.",
"生成失败，请稍后重试。": "생성에 실패했습니다. 나중에 다시 시도하세요.",
      "普通二维码直接保存文字或网址，扫码应用如何显示取决于其自身支持情况。": "一般 QR Code 直接儲存文字或網址，掃描應用如何顯示取決於其本身的支援情況。",
      "文字会先保存到荷萌，再将专属网页链接生成二维码。": "文字會先儲存到荷萌，再將專屬網頁連結產生為 QR Code。",
      "二维码尺寸": "QR Code 尺寸",
      "纠错等级": "錯誤修正等級",
      "低（L）": "低（L）",
      "中（M）": "中（M）",
      "较高（Q）": "較高（Q）",
      "高（H）": "高（H）",
      "二维码颜色": "QR Code 顏色",
      "背景颜色": "背景顏色",
      "清空": "清空",
      "二维码将在这里显示": "QR Code 將在這裡顯示",
      "等待生成": "等待產生",
      "下载 PNG": "下載 PNG",
      "分享 / 保存图片": "分享 / 儲存圖片",
      "网页分享链接": "網頁分享連結",
      "创作时间": "建立時間",
      "剩余有效时间": "剩餘有效時間",
      "复制分享链接": "複製分享連結",
      "二维码会自动添加标准留白。分享功能取决于设备和浏览器的支持情况。": "QR Code 會自動加入標準留白。分享功能取決於裝置和瀏覽器的支援情況。",
      "识别二维码图片": "辨識 QR Code 圖片",
      "选择设备中的二维码图片，浏览器会尝试在本地识别，不会主动上传图片。": "選擇裝置中的 QR Code 圖片，瀏覽器會嘗試在本機辨識，不會主動上傳圖片。",
      "复制识别结果": "複製辨識結果",
      "清除": "清除",
      "生成与识别尽可能在当前浏览器本地完成。": "產生與辨識會盡可能在目前瀏覽器本機完成。",
      "请先输入文字或网址。": "請先輸入文字或網址。",
      "网页分享内容不能超过 3000 个字符。": "網頁分享內容不能超過 3000 個字元。",
      "二维码组件加载失败，请检查网络后刷新页面。": "QR Code 元件載入失敗，請檢查網路後重新整理頁面。",
      "正在保存分享内容……": "正在儲存分享內容……",
      "正在准备……": "準備中……",
      "正在生成二维码……": "正在產生 QR Code……",
      "二维码生成失败，请重新尝试。": "QR Code 產生失敗，請再試一次。",
      "生成失败": "產生失敗",
      "生成成功 · 可以下载或分享": "產生成功 · 可以下載或分享",
      "网页展示二维码已生成。扫码后将打开荷萌分享页面。": "網頁展示 QR Code 已產生。掃描後將開啟荷萌分享頁面。",
      "普通二维码已生成，已添加标准留白。": "一般 QR Code 已產生，並已加入標準留白。",
      "二维码尚未生成": "QR Code 尚未產生",
      "图片导出失败": "圖片匯出失敗",
      "服务器返回了无法识别的内容，请稍后重试。": "伺服器回傳了無法辨識的內容，請稍後再試。",
      "创建分享失败，请稍后重试。": "建立分享失敗，請稍後再試。",
      "服务器返回的分享地址不正确。": "伺服器回傳的分享網址不正確。",
      "服务器没有返回完整的分享时间信息，请确认接口已经更新。": "伺服器沒有回傳完整的分享時間資訊，請確認介面已更新。",
      "已过期": "已過期",
      "已发起 PNG 下载。": "已開始下載 PNG。",
      "图片下载失败，请重新生成二维码。": "圖片下載失敗，請重新產生 QR Code。",
      "已打开系统分享面板。": "已開啟系統分享面板。",
      "当前浏览器不支持图片分享，已改用 PNG 下载。": "目前瀏覽器不支援圖片分享，已改用 PNG 下載。",
      "已取消分享。": "已取消分享。",
      "分享不可用，请尝试使用下载 PNG。": "無法分享，請嘗試下載 PNG。",
      "已复制": "已複製",
      "复制失败，请手动选择上方链接。": "複製失敗，請手動選取上方連結。",
      "请选择图片文件。": "請選擇圖片檔案。",
      "识别组件加载失败，请检查网络后刷新页面。": "辨識元件載入失敗，請檢查網路後重新整理頁面。",
      "正在读取图片……": "正在讀取圖片……",
      "识别成功。": "辨識成功。",
      "没有识别到二维码，请尝试更清晰、完整的图片。": "沒有辨識到 QR Code，請嘗試更清晰、完整的圖片。",
      "图片处理失败，请尝试其他图片。": "圖片處理失敗，請嘗試其他圖片。",
      "图片读取失败。": "圖片讀取失敗。",
      "已复制识别结果。": "已複製辨識結果。",
      "浏览器不允许自动复制，请长按识别结果手动复制。": "瀏覽器不允許自動複製，請長按辨識結果手動複製。"
    },

    "en": {
      title: "QR Code Tool - HEMENG",
      "荷萌首页": "HEMENG Home",
      "← 返回首页": "← Back to Home",
      "二维码工具": "QR Code Tool",
      "生成二维码，也可以识别已有二维码。尽可能在当前设备本地处理。": "Create QR codes or scan existing ones. Processing is performed locally whenever possible.",
      "生成二维码": "Generate QR Code",
      "识别二维码": "Scan QR Code",
      "二维码生成": "QR Code Generator",
      "普通二维码": "Standard QR Code",
      "直接编码文字或网址": "Encode text or a URL directly",
      "网页展示二维码": "Web Display QR Code",
      "扫码打开荷萌页面查看文字": "Open a HEMENG page to view text",
      "输入要放进二维码的内容": "Enter the content for your QR code",
      "普通二维码直接保存文字或网址，扫码应用如何显示取决于其自身支持情况。": "A standard QR code stores text or a URL directly. How it appears depends on the scanning app.",
      "文字会先保存到荷萌，再将专属网页链接生成二维码。": "Your text will be saved to HEMENG, and a unique page link will be encoded into the QR code.",
      "网页展示模式会把文字保存到荷萌服务器，分享链接有效期为 30 天。任何获得链接的人都能查看内容，请勿填写密码或私人信息。": "Web display mode saves your text on HEMENG servers. The link is valid for 30 days. Anyone with the link can view it. Do not enter passwords or private information.",
      "二维码尺寸": "QR Code Size",
      "纠错等级": "Error Correction",
      "低（L）": "Low (L)",
      "中（M）": "Medium (M)",
      "较高（Q）": "Quartile (Q)",
      "高（H）": "High (H)",
      "二维码颜色": "QR Code Color",
      "背景颜色": "Background Color",
      "清空": "Clear",
      "二维码将在这里显示": "Your QR code will appear here",
      "等待生成": "Waiting to generate",
      "下载 PNG": "Download PNG",
      "分享 / 保存图片": "Share / Save Image",
      "网页分享链接": "Web Share Link",
      "创作时间": "Created",
      "剩余有效时间": "Time Remaining",
      "复制分享链接": "Copy Share Link",
      "二维码会自动添加标准留白。分享功能取决于设备和浏览器的支持情况。": "Standard margins are added automatically. Sharing depends on your device and browser.",
      "识别二维码图片": "Scan a QR Code Image",
      "选择设备中的二维码图片，浏览器会尝试在本地识别，不会主动上传图片。": "Choose a QR code image from your device. Your browser will try to scan it locally; the image is not uploaded.",
      "复制识别结果": "Copy Scan Result",
      "清除": "Clear",
      "生成与识别尽可能在当前浏览器本地完成。": "Generation and scanning are performed locally in your browser whenever possible.",
      "请先输入文字或网址。": "Please enter some text or a URL first.",
      "网页分享内容不能超过 3000 个字符。": "Web share content cannot exceed 3,000 characters.",
      "二维码组件加载失败，请检查网络后刷新页面。": "QR code library failed to load. Check your connection and refresh the page.",
      "正在保存分享内容……": "Saving share content...",
      "正在准备……": "Preparing...",
      "正在生成二维码……": "Generating QR code...",
      "二维码生成失败，请重新尝试。": "QR code generation failed. Please try again.",
      "生成失败": "Generation failed",
      "生成成功 · 可以下载或分享": "Generated successfully · Ready to download or share",
      "网页展示二维码已生成。扫码后将打开荷萌分享页面。": "Web display QR code created. Scanning it will open the HEMENG sharing page.",
      "普通二维码已生成，已添加标准留白。": "Standard QR code created with margins.",
      "二维码尚未生成": "QR code has not been generated yet",
      "图片导出失败": "Image export failed",
      "服务器返回了无法识别的内容，请稍后重试。": "The server returned an unreadable response. Please try again later.",
      "创建分享失败，请稍后重试。": "Could not create the share. Please try again later.",
      "服务器返回的分享地址不正确。": "The server returned an invalid share URL.",
      "服务器没有返回完整的分享时间信息，请确认接口已经更新。": "The server did not return complete sharing time information. Please check that the API has been updated.",
      "已过期": "Expired",
      "已发起 PNG 下载。": "PNG download started.",
      "图片下载失败，请重新生成二维码。": "Image download failed. Please generate the QR code again.",
      "已打开系统分享面板。": "System share menu opened.",
      "当前浏览器不支持图片分享，已改用 PNG 下载。": "Image sharing is not supported by this browser. Downloading PNG instead.",
      "已取消分享。": "Sharing cancelled.",
      "分享不可用，请尝试使用下载 PNG。": "Sharing is unavailable. Try downloading the PNG instead.",
      "已复制": "Copied",
      "复制失败，请手动选择上方链接。": "Copy failed. Please select the link above manually.",
      "请选择图片文件。": "Please select an image file.",
      "识别组件加载失败，请检查网络后刷新页面。": "Scanner library failed to load. Check your connection and refresh the page.",
      "正在读取图片……": "Reading image...",
      "识别成功。": "QR code scanned successfully.",
      "没有识别到二维码，请尝试更清晰、完整的图片。": "No QR code found. Try a clearer, uncropped image.",
      "图片处理失败，请尝试其他图片。": "Image processing failed. Please try another image.",
      "图片读取失败。": "Could not read the image.",
      "已复制识别结果。": "Scan result copied.",
      "浏览器不允许自动复制，请长按识别结果手动复制。": "Automatic copying is unavailable. Press and hold the result to copy it manually."
    },

    "ja": {
      title: "QRコードツール - 荷萌 HEMENG",
      "荷萌首页": "荷萌ホーム",
      "← 返回首页": "← ホームに戻る",
      "二维码工具": "QRコードツール",
      "生成二维码，也可以识别已有二维码。尽可能在当前设备本地处理。": "QRコードの作成と読み取りができます。可能な限り端末内で処理します。",
      "生成二维码": "QRコードを作成",
      "识别二维码": "QRコードを読み取る",
      "二维码生成": "QRコード作成",
      "普通二维码": "通常のQRコード",
      "直接编码文字或网址": "テキストやURLを直接埋め込む",
      "网页展示二维码": "ウェブ表示QRコード",
      "扫码打开荷萌页面查看文字": "読み取ると荷萌のページでテキストを表示",
      "输入要放进二维码的内容": "QRコードに含める内容を入力",
      "普通二维码直接保存文字或网址，扫码应用如何显示取决于其自身支持情况。": "通常のQRコードにはテキストやURLが直接保存されます。表示方法は読み取りアプリによって異なります。",
      "文字会先保存到荷萌，再将专属网页链接生成二维码。": "テキストを荷萌に保存し、専用ページのリンクをQRコードにします。",
      "网页展示模式会把文字保存到荷萌服务器，分享链接有效期为 30 天。任何获得链接的人都能查看内容，请勿填写密码或私人信息。": "ウェブ表示モードではテキストが荷萌のサーバーに保存されます。リンクの有効期限は30日です。リンクを知っている人は誰でも内容を閲覧できます。パスワードや個人情報は入力しないでください。",
      "二维码尺寸": "QRコードのサイズ",
      "纠错等级": "誤り訂正レベル",
      "低（L）": "低（L）",
      "中（M）": "中（M）",
      "较高（Q）": "高め（Q）",
      "高（H）": "高（H）",
      "二维码颜色": "QRコードの色",
      "背景颜色": "背景色",
      "清空": "クリア",
      "二维码将在这里显示": "ここにQRコードが表示されます",
      "等待生成": "作成待ち",
      "下载 PNG": "PNGをダウンロード",
      "分享 / 保存图片": "共有 / 画像を保存",
      "网页分享链接": "ウェブ共有リンク",
      "创作时间": "作成日時",
      "剩余有效时间": "有効期限まで",
      "复制分享链接": "共有リンクをコピー",
      "二维码会自动添加标准留白。分享功能取决于设备和浏览器的支持情况。": "QRコードには標準の余白が自動で追加されます。共有機能は端末とブラウザに依存します。",
      "识别二维码图片": "QRコード画像を読み取る",
      "选择设备中的二维码图片，浏览器会尝试在本地识别，不会主动上传图片。": "端末内のQRコード画像を選択してください。画像はアップロードされず、ブラウザ内で読み取りを試みます。",
      "复制识别结果": "読み取り結果をコピー",
      "清除": "消去",
      "生成与识别尽可能在当前浏览器本地完成。": "作成と読み取りは可能な限りブラウザ内で処理されます。",
      "请先输入文字或网址。": "テキストまたはURLを入力してください。",
      "网页分享内容不能超过 3000 个字符。": "共有するテキストは3000文字以内にしてください。",
      "二维码组件加载失败，请检查网络后刷新页面。": "QRコードライブラリを読み込めません。ネットワークを確認して再読み込みしてください。",
      "正在保存分享内容……": "共有内容を保存しています...",
      "正在准备……": "準備中...",
      "正在生成二维码……": "QRコードを作成しています...",
      "二维码生成失败，请重新尝试。": "QRコードを作成できませんでした。もう一度お試しください。",
      "生成失败": "作成失敗",
      "生成成功 · 可以下载或分享": "作成完了 · ダウンロードまたは共有できます",
      "网页展示二维码已生成。扫码后将打开荷萌分享页面。": "ウェブ表示QRコードを作成しました。読み取ると荷萌の共有ページが開きます。",
      "普通二维码已生成，已添加标准留白。": "通常のQRコードを作成しました。標準の余白を追加済みです。",
      "二维码尚未生成": "QRコードはまだ作成されていません",
      "图片导出失败": "画像の書き出しに失敗しました",
      "服务器返回了无法识别的内容，请稍后重试。": "サーバーから認識できない応答が返されました。後でもう一度お試しください。",
      "创建分享失败，请稍后重试。": "共有リンクを作成できませんでした。後でもう一度お試しください。",
      "服务器返回的分享地址不正确。": "サーバーから不正な共有URLが返されました。",
      "服务器没有返回完整的分享时间信息，请确认接口已经更新。": "サーバーから共有時刻の情報が正しく返されませんでした。APIの更新を確認してください。",
      "已过期": "期限切れ",
      "已发起 PNG 下载。": "PNGのダウンロードを開始しました。",
      "图片下载失败，请重新生成二维码。": "画像をダウンロードできませんでした。QRコードを再作成してください。",
      "已打开系统分享面板。": "共有メニューを開きました。",
      "当前浏览器不支持图片分享，已改用 PNG 下载。": "このブラウザは画像共有に対応していないため、PNGをダウンロードします。",
      "已取消分享。": "共有をキャンセルしました。",
      "分享不可用，请尝试使用下载 PNG。": "共有できません。PNGのダウンロードをお試しください。",
      "已复制": "コピーしました",
      "复制失败，请手动选择上方链接。": "コピーできませんでした。上のリンクを手動で選択してください。",
      "请选择图片文件。": "画像ファイルを選択してください。",
      "识别组件加载失败，请检查网络后刷新页面。": "読み取りライブラリを読み込めません。ネットワークを確認して再読み込みしてください。",
      "正在读取图片……": "画像を読み込んでいます...",
      "识别成功。": "読み取りに成功しました。",
      "没有识别到二维码，请尝试更清晰、完整的图片。": "QRコードを検出できませんでした。より鮮明で全体が写った画像をお試しください。",
      "图片处理失败，请尝试其他图片。": "画像の処理に失敗しました。別の画像をお試しください。",
      "图片读取失败。": "画像を読み込めませんでした。",
      "已复制识别结果。": "読み取り結果をコピーしました。",
      "浏览器不允许自动复制，请长按识别结果手动复制。": "ブラウザが自動コピーを許可していません。結果を長押しして手動でコピーしてください。"
    },

    "ko": {
      title: "QR 코드 도구 - 荷萌 HEMENG",
      "荷萌首页": "荷萌 홈",
      "← 返回首页": "← 홈으로 돌아가기",
      "二维码工具": "QR 코드 도구",
      "生成二维码，也可以识别已有二维码。尽可能在当前设备本地处理。": "QR 코드를 만들거나 기존 코드를 인식할 수 있습니다. 가능한 한 기기 내에서 처리합니다.",
      "生成二维码": "QR 코드 생성",
      "识别二维码": "QR 코드 인식",
      "二维码生成": "QR 코드 생성기",
      "普通二维码": "일반 QR 코드",
      "直接编码文字或网址": "텍스트 또는 URL을 직접 인코딩",
      "网页展示二维码": "웹 표시 QR 코드",
      "扫码打开荷萌页面查看文字": "스캔하면 荷萌 페이지에서 텍스트 확인",
      "输入要放进二维码的内容": "QR 코드에 넣을 내용 입력",
      "普通二维码直接保存文字或网址，扫码应用如何显示取决于其自身支持情况。": "일반 QR 코드는 텍스트나 URL을 직접 저장합니다. 표시 방식은 스캔 앱에 따라 다릅니다.",
      "文字会先保存到荷萌，再将专属网页链接生成二维码。": "텍스트를 荷萌에 저장한 다음 전용 웹페이지 링크를 QR 코드로 만듭니다.",
      "网页展示模式会把文字保存到荷萌服务器，分享链接有效期为 30 天。任何获得链接的人都能查看内容，请勿填写密码或私人信息。": "웹 표시 모드에서는 텍스트가 荷萌 서버에 저장됩니다. 공유 링크는 30일 동안 유효하며 링크를 가진 사람은 누구나 내용을 볼 수 있습니다. 비밀번호나 개인정보를 입력하지 마세요.",
      "二维码尺寸": "QR 코드 크기",
      "纠错等级": "오류 복원 수준",
      "低（L）": "낮음 (L)",
      "中（M）": "보통 (M)",
      "较高（Q）": "높음 (Q)",
      "高（H）": "매우 높음 (H)",
      "二维码颜色": "QR 코드 색상",
      "背景颜色": "배경 색상",
      "清空": "비우기",
      "二维码将在这里显示": "여기에 QR 코드가 표시됩니다",
      "等待生成": "생성 대기 중",
      "下载 PNG": "PNG 다운로드",
      "分享 / 保存图片": "공유 / 이미지 저장",
      "网页分享链接": "웹 공유 링크",
      "创作时间": "생성 시간",
      "剩余有效时间": "남은 유효 시간",
      "复制分享链接": "공유 링크 복사",
      "二维码会自动添加标准留白。分享功能取决于设备和浏览器的支持情况。": "QR 코드에 표준 여백이 자동으로 추가됩니다. 공유 기능은 기기와 브라우저 지원 여부에 따라 달라집니다.",
      "识别二维码图片": "QR 코드 이미지 인식",
      "选择设备中的二维码图片，浏览器会尝试在本地识别，不会主动上传图片。": "기기에서 QR 코드 이미지를 선택하세요. 브라우저가 로컬에서 인식하며 이미지를 업로드하지 않습니다.",
      "复制识别结果": "인식 결과 복사",
      "清除": "지우기",
      "生成与识别尽可能在当前浏览器本地完成。": "생성과 인식은 가능한 한 현재 브라우저에서 로컬로 처리됩니다.",
      "请先输入文字或网址。": "텍스트 또는 URL을 먼저 입력하세요.",
      "网页分享内容不能超过 3000 个字符。": "웹 공유 내용은 3,000자를 초과할 수 없습니다.",
      "二维码组件加载失败，请检查网络后刷新页面。": "QR 코드 라이브러리를 불러오지 못했습니다. 네트워크를 확인하고 새로고침하세요.",
      "正在保存分享内容……": "공유 내용을 저장하는 중...",
      "正在准备……": "준비 중...",
      "正在生成二维码……": "QR 코드를 생성하는 중...",
      "二维码生成失败，请重新尝试。": "QR 코드 생성에 실패했습니다. 다시 시도하세요.",
      "生成失败": "생성 실패",
      "生成成功 · 可以下载或分享": "생성 완료 · 다운로드하거나 공유할 수 있습니다",
      "网页展示二维码已生成。扫码后将打开荷萌分享页面。": "웹 표시 QR 코드가 생성되었습니다. 스캔하면 荷萌 공유 페이지가 열립니다.",
      "普通二维码已生成，已添加标准留白。": "일반 QR 코드가 생성되었으며 표준 여백이 추가되었습니다.",
      "二维码尚未生成": "아직 QR 코드가 생성되지 않았습니다",
      "图片导出失败": "이미지 내보내기에 실패했습니다",
      "服务器返回了无法识别的内容，请稍后重试。": "서버에서 읽을 수 없는 응답을 받았습니다. 나중에 다시 시도하세요.",
      "创建分享失败，请稍后重试。": "공유 링크 생성에 실패했습니다. 나중에 다시 시도하세요.",
      "服务器返回的分享地址不正确。": "서버에서 잘못된 공유 주소를 반환했습니다.",
      "服务器没有返回完整的分享时间信息，请确认接口已经更新。": "서버에서 공유 시간 정보를 모두 반환하지 않았습니다. API가 업데이트되었는지 확인하세요.",
      "已过期": "만료됨",
      "已发起 PNG 下载。": "PNG 다운로드를 시작했습니다.",
      "图片下载失败，请重新生成二维码。": "이미지 다운로드에 실패했습니다. QR 코드를 다시 생성하세요.",
      "已打开系统分享面板。": "시스템 공유 메뉴를 열었습니다.",
      "当前浏览器不支持图片分享，已改用 PNG 下载。": "현재 브라우저는 이미지 공유를 지원하지 않아 PNG 다운로드로 전환했습니다.",
      "已取消分享。": "공유가 취소되었습니다.",
      "分享不可用，请尝试使用下载 PNG。": "공유할 수 없습니다. PNG 다운로드를 이용하세요.",
      "已复制": "복사됨",
      "复制失败，请手动选择上方链接。": "복사에 실패했습니다. 위의 링크를 직접 선택하세요.",
      "请选择图片文件。": "이미지 파일을 선택하세요.",
      "识别组件加载失败，请检查网络后刷新页面。": "인식 라이브러리를 불러오지 못했습니다. 네트워크를 확인하고 새로고침하세요.",
      "正在读取图片……": "이미지를 읽는 중...",
      "识别成功。": "인식에 성공했습니다.",
      "没有识别到二维码，请尝试更清晰、完整的图片。": "QR 코드를 찾지 못했습니다. 더 선명하고 잘리지 않은 이미지를 사용하세요.",
      "图片处理失败，请尝试其他图片。": "이미지 처리에 실패했습니다. 다른 이미지를 사용하세요.",
      "图片读取失败。": "이미지를 읽지 못했습니다.",
      "已复制识别结果。": "인식 결과를 복사했습니다.",
      "浏览器不允许自动复制，请长按识别结果手动复制。": "브라우저에서 자동 복사가 허용되지 않습니다. 결과를 길게 눌러 직접 복사하세요."
    }
  };

  const originalTexts = new WeakMap();
  const originalAttributes = new WeakMap();
  let observer = null;

  function language() {
    return window.HemengI18n
      ? window.HemengI18n.getLanguage()
      : "zh-CN";
  }

  function translateText(value, lang) {
    const dictionary = I18N[lang] || I18N["zh-CN"];
    const text = value.trim();

    if (!text) return value;

    if (dictionary[text] !== undefined) {
      return value.replace(text, dictionary[text]);
    }

    // 动态时间倒计时
    if (lang !== "zh-CN") {
      const match = text.match(/^(\d+)天 (\d{2}):(\d{2}):(\d{2})$/);

      if (match) {
        const units = {
          "zh-TW": ["天", "小時", "分鐘", "秒"],
          en: ["d", "h", "m", "s"],
          ja: ["日", "時間", "分", "秒"],
          ko: ["일", "시간", "분", "초"]
        }[lang];

        return `${match[1]}${units[0]} ${match[2]}${units[1]} ${match[3]}${units[2]} ${match[4]}${units[3]}`;
      }
    }

    return value;
  }

  const original = originalTexts.get(node);
      const translated = translateText(original, lang);

      if (node.nodeValue !== translated) {
        node.nodeValue = translated;
      }
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;

    // 不翻译用户输入、识别结果及分享链接
    if (
      node.matches("textarea, input, #readResult, #shareLinkText") ||
      node.closest("textarea, input, #readResult, #shareLinkText")
    ) {
      return;
    }

    const attributes = ["placeholder", "title", "aria-label", "alt"];

    attributes.forEach(function (attribute) {
      if (!node.hasAttribute(attribute)) return;

      let saved = originalAttributes.get(node);

      if (!saved) {
        saved = {};
        originalAttributes.set(node, saved);
    
  function addLanguageSelector() {
    const nav = document.querySelector(".site-nav");
    if (!nav || nav.querySelector(".hemeng-language-select")) return;

    const select = document.createElement("select");
    select.className = "hemeng-language-select";
    select.setAttribute("aria-label", "Language");

    select.style.cssText = [
      "width:auto",
      "max-width:125px",
      "padding:8px 10px",
      "border:1px solid #f0dfd9",
      "border-radius:999px",
      "background:#fff",
      "color:#6d4c49",
      "font-size:12px",
      "cursor:pointer"
    ].join(";");

    const languages = window.HemengI18n
      ? window.HemengI18n.getLanguages()
      : [];

    languages.forEach(function (item) {
      const option = document.createElement("option");
      option.value = item.code;
      option.textContent = item.name;
      select.appendChild(option);
    });

    select.value = language();

    select.addEventListener("change", function () {
      if (window.HemengI18n) {
        window.HemengI18n.setLanguage(select.value);
      }
    });

    nav.appendChild(select);
  }

  function applyLanguage() {
    const lang = language();

    document.documentElement.lang = lang;

    const dictionary = I18N[lang] || I18N["zh-CN"];
    document.title = dictionary.title || I18N["zh-CN"].title;

    addLanguageSelector();

    document.querySelectorAll("body *").forEach(function (element) {
      translateNode(element, lang);
    });

    const selector = document.querySelector(".hemeng-language-select");
    if (selector) selector.value = lang;
  }

  function startObserver() {
    if (observer) observer.disconnect();

    observer = new MutationObserver(function (mutations) {
      const lang = language();

      mutations.forEach(function (mutation) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach(function (node) {
            translateNode(node, lang);
          });
        } else if (mutation.type === "characterData") {
          translateNode(mutation.target, lang);
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  function init() {
    applyLanguage();
    startObserver();

    window.addEventListener("hemeng-language-change", function () {
      applyLanguage();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
