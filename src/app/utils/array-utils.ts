export class ArrayUtils {

    // Return item from array by property value. You need to provide the array, property, and value it should be
    public static getItemByProperty(array: any[], property: string, value: any): any | undefined {
        return array.find((item: any) => item[property] === value);
    }
}