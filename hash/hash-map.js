class SimpleHashMap {
    constructor(count) {
        this.count = count;
        this.buckets = Array.from({ length: count }, () => []);
    }

    getBucket = (key) => {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        return bucket;
    };

    hashFunction = (value) => {
        let sumOfChar = 0;

        for (const char of value) {
            const digit = Number(char);
            sumOfChar += Number.isInteger(digit) ? digit : 0;
        }

        return sumOfChar % this.count;
    };

    put = (key, value) => {
        const bucket = this.getBucket(key);

        for (let idx = 0; idx < bucket.length; idx++) {
            if (bucket[idx].key === key) {
                bucket[idx] = { key, value };
                return;
            }
        }

        bucket.push({ key, value });
    };

    get = (key) => {
        const bucket = this.getBucket(key);

        for (const { key: k, value: v } of bucket) {
            if (k === key) return v;
        }

        return null;
    };

    remove = (key) => {
        const bucket = this.getBucket(key);

        for (let idx = 0; idx < bucket.length; idx++) {
            if (bucket[idx].key === key) {
                bucket.splice(idx, 1);
                return;
            }
        }
    };

    printMap = () => {
        this.buckets.forEach((bucket, idx) => {
            console.log(
                `Bucket ${idx} with ${
                    bucket.length
                        ? bucket.map(({ key, value }) => `${key}: ${value}`).join(", ")
                        : "no element"
                }`,
            );
        });
    };
}

const hashMap = new SimpleHashMap(10);

hashMap.put("123-4567", "Charlotte");
hashMap.put("123-4568", "Thomas");
hashMap.put("123-4569", "Jens");
hashMap.put("123-4570", "Peter");
hashMap.put("123-4571", "Lisa");
hashMap.put("123-4672", "Adele");
hashMap.put("123-4573", "Michaela");
hashMap.put("123-6574", "Bob");

hashMap.printMap();

console.log("\nName associated with '123-4570':", hashMap.get("123-4570"));

console.log("Updating the name for '123-4570' to 'James'");
hashMap.put("123-4570", "James");

console.log("Name associated with '123-4570':", hashMap.get("123-4570"));
