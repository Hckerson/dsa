class SimpleHashSet {
    constructor(count) {
        this.count = count;
        this.buckets = Array.from({ length: count }, () => []);
    }

    hashFunction = (value) => {
        let sum = 0;

        String(value)
            .split("")
            .forEach((char) => {
                sum += char.codePointAt();
            });

        return sum % this.count;
    };

    getBucket = (value) => {
        return this.buckets[this.hashFunction(value)];
    };

    contains = (value) => {
        const content = this.getBucket(value);

        return content.includes(value);
    };

    add = (value) => {
        const content = this.getBucket(value);
        !content.includes(value) && content.push(value);
    };

    remove = (value) => {
        const bucket = this.buckets[this.hashFunction(value)];
        const index = bucket.indexOf(value);
        index !== -1 && bucket.splice(index, 1);
    };

    printSet = () => {
        this.buckets.forEach((bucket, idx) => {
            console.log(
                `Bucket ${idx} with ${bucket.length ? `${bucket}` : "no element"}`,
            );
        });
    };
}

const hashSet = new SimpleHashSet(10);

hashSet.add("Charlotte");
hashSet.add("Thomas");
hashSet.add("Jens");
hashSet.add("Peter");
hashSet.add("Lisa");
hashSet.add("Adele");
hashSet.add("Michaela");
hashSet.add("Bob");

hashSet.printSet();

console.log("\n'Peter' is in the set:", hashSet.contains("Peter"));
console.log("Removing 'Peter'");
hashSet.remove("Peter");
console.log("'Peter' is in the set:", hashSet.contains("Peter"));
console.log("'Adele' has hash code:", hashSet.hashFunction("Adele"));
