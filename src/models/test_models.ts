export interface RootObject {
	total: number;
	rows: RootObjectRows[];
	code: number;
	msg: string;
}
export interface RootObjectRows {
	recordId: number;
	prizeId: number;
	stockId: number;
	name: string;
	img: string;
	dueTime: string;
	logisticsOrdeNo: string;
	logisticsAddress: string;
	cardNumber: string;
	cardNumberPassword: string;
	address: string;
	prizeType: number;
}
