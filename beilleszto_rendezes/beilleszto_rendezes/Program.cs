namespace beilleszto_rendezes
{
    internal class Program
    {
        static void Main(string[] args)
        {
           
        }
        public static void Rendezes(int[] x)
        {
            for (int i = 1; i < x.Length; i++)
            {
                int j = i - 1;
                int seged = x[i];
                while (j > -1 && x[j] > seged)
                {
                    x[j + 1] = x[j];
                    j--;
                }
                x[j + 1] = seged;
            }
        }
    }
}
