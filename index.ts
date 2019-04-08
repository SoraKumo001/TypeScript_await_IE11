


/**
 * 待機用関数
 * timeout 待機時間(ms)
 * @returns Promise<void>
 */
function Sleep(timeout:number) : Promise<void>{
	return new Promise((resolv)=>{
		setTimeout(()=>{
			resolv()
		}, timeout)
	})
}
/**
 *メイン関数(非同期)
 *@returns Promise<void>
 */
async function Main() : Promise<void>{
	const div = document.createElement('div')
	document.body.appendChild(div)
	while(true){
		div.innerHTML += '出力<br>'
		await Sleep(1000)
	}
}
//ページ読み込み時に実行する処理を設定
addEventListener("DOMContentLoaded", Main)