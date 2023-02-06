# My Supabase cheat sheet

## 1. Log in in Supabase

## 2. Create a project

While creating don't forget to copy api key and restfull query url for your project. Save it.

## 3. Install js-client

> npm install @supabase/supabase-js

---

> yarn add @supabase/supabase-js

## 4. Initialize Supabase in your frontend via js-package method in a separate file

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_API_URL || '';
const supabaseKey = process.env.REACT_APP_API_KEY || '';

console.log({ supabaseUrl, supabaseKey });

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
```

## 5. Use it inside your components

```typescript
useEffect(() => {
  const fetchSharks = async () => {
    const { data, error } = await supabase
      // table name
      .from('sharks')
      // select anf get all the table records
      .select();

    if (error) {
      console.log('supa error', error);
      setFetchError('Sharks fetch error');
    }
    if (data) {
      console.log('data', data);
      setSharks(data);
      setFetchError('');
    }
  };
  fetchSharks();
}, []);
```
