export const URL = "http://172.24.5.54:3600";

export function getQueryParams(filters) {
	let ans = "";
	let first = true;
	for (const filter in filters) {
		if (filters[filter] !== "") {
			var str;
			if (first) [str, first] = ["?", false];
			else str = "&";

			switch (filter) {
				default:
					ans += str + `${filter}=${filters[filter]}`;
					break;
			}
		}
	}
	return ans;
}

export function base64ToBlob(base64) {
	const binaryString = window.atob(base64);
	const len = binaryString.length;
	const bytes = new Uint8Array(len);
	for (let i = 0; i < len; ++i) {
		bytes[i] = binaryString.charCodeAt(i);
	}
	return new Blob([bytes], {type: "application/pdf"});
}

const activityTypes = {
	qualifying: "Calificable",
};
