import { resolve } from "path";
import { CustomerDataParserTxt } from "../customer-data-parser-txt";
import { CustomerDataParserJson } from "../customer-data-parser-json";

describe("template method test", () => {
  test("parse data files", async () => {
    const filePathTxt = resolve(__dirname, "..", "files", "customer.txt");

    const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
    await customerDataParserTxt.fixCustomerData();
    expect(customerDataParserTxt.customerData).toHaveLength(5);

    const filePathJson = resolve(__dirname, "..", "files", "customer.json");
    const customerDataParserJson = new CustomerDataParserJson(filePathJson);
    await customerDataParserJson.fixCustomerData();
    expect(customerDataParserJson.customerData).toHaveLength(5);
  });
});
