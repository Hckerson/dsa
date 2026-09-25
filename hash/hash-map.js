class SimpleHashMap {
    constructor(count) {
        this.count = count;
        this.buckets = Array.from({ length: count }, () => []);
    }

    hashFunction = (value) => {
        let sum = 0;

        String(value)
            .split("")
            .forEach((c) => {
                const valid = Number.isInteger(Number(c));
                sum += valid ? Number(c) : 0;
            });

        return sum % this.count;
    };

    getBucket = (key) => {
        return this.buckets[this.hashFunction(key)];
    };

    put = (newKey, newValue) => {
        const bucket = this.getBucket(newKey);

        for (const entry of bucket) {
            if (entry.key === newKey) {
                entry.value = newValue;
                return;
            }
        }

        bucket.push({ key: newKey, value: newValue });
    };

    get = (key) => {
        const bucket = this.getBucket(key);
        for (const { key: oldKey, value } of bucket) {
            if (key === oldKey) return value;
        }
        return null;
    };

    remove = (key) => {
        const index = this.hashFunction(key);
        this.buckets[index] = this.buckets[index].filter(
            ({ key: oldKey }) => oldKey !== key,
        );
    };

    printMap = () => {
        this.buckets.forEach((bucket, idx) => {
            console.log(
                `Bucket ${idx} with ${
                    bucket.length
                        ? bucket
                              .map(({ key, value }) => `${key}: ${value}`)
                              .join(", ")
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

hashMap.remove("123-4571");

hashMap.printMap();
